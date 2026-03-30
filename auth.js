const AuthStorage = (() => {
    const KEYS = {
        users: "ssai_users",
        currentUser: "ssai_current_user",
        lastUsername: "ssai_last_username",
        activity: "ssai_activity"
    };

    const LEGACY_KEYS = ["users", "currentUser"];
    const WINDOW_NAME_PREFIX = "SSAI_AUTH::";
    const COOKIE_KEY = "ssai_auth";

    const writeWindowName = (payload) => {
        if (typeof window === "undefined") {
            return;
        }

        try {
            window.name = `${WINDOW_NAME_PREFIX}${encodeURIComponent(JSON.stringify(payload))}`;
        } catch (error) {
            // Ignore write failures (e.g., disabled window.name updates).
        }
    };

    const readWindowName = () => {
        if (typeof window === "undefined") {
            return null;
        }

        if (!window.name || !window.name.startsWith(WINDOW_NAME_PREFIX)) {
            return null;
        }

        try {
            const raw = window.name.slice(WINDOW_NAME_PREFIX.length);
            return JSON.parse(decodeURIComponent(raw));
        } catch (error) {
            return null;
        }
    };

    const clearWindowName = () => {
        if (typeof window === "undefined") {
            return;
        }

        if (window.name && window.name.startsWith(WINDOW_NAME_PREFIX)) {
            window.name = "";
        }
    };

    const setCookie = (value) => {
        if (typeof document === "undefined") {
            return;
        }

        const encoded = encodeURIComponent(JSON.stringify(value));
        document.cookie = `${COOKIE_KEY}=${encoded}; Path=/; Max-Age=604800; SameSite=Lax`;
    };

    const readCookie = () => {
        if (typeof document === "undefined") {
            return null;
        }

        const parts = document.cookie.split(";").map((item) => item.trim());
        const entry = parts.find((item) => item.startsWith(`${COOKIE_KEY}=`));
        if (!entry) {
            return null;
        }

        const raw = entry.slice(COOKIE_KEY.length + 1);
        try {
            return JSON.parse(decodeURIComponent(raw));
        } catch (error) {
            return null;
        }
    };

    const clearCookie = () => {
        if (typeof document === "undefined") {
            return;
        }

        document.cookie = `${COOKIE_KEY}=; Path=/; Max-Age=0; SameSite=Lax`;
    };

    const isAvailable = () => {
        try {
            const testKey = "__ssai_test__";
            localStorage.setItem(testKey, "1");
            localStorage.removeItem(testKey);
            return true;
        } catch (error) {
            return false;
        }
    };

    const normalizeUser = (user) => ({
        username: String(user.username || "").trim(),
        email: String(user.email || "").trim().toLowerCase(),
        password: String(user.password || ""),
        createdAt: user.createdAt || new Date().toISOString()
    });

    const clear = () => {
        clearWindowName();
        clearCookie();

        try {
            sessionStorage.removeItem(KEYS.currentUser);
        } catch (error) {
            // Ignore session storage errors.
        }

        if (!isAvailable()) {
            return false;
        }

        Object.values(KEYS).forEach((key) => localStorage.removeItem(key));
        LEGACY_KEYS.forEach((key) => localStorage.removeItem(key));
        return true;
    };

    const getUsers = () => {
        if (!isAvailable()) {
            return [];
        }

        const raw = localStorage.getItem(KEYS.users);
        if (!raw) {
            return [];
        }

        let parsed = [];
        try {
            parsed = JSON.parse(raw);
        } catch (error) {
            clear();
            return [];
        }

        if (!Array.isArray(parsed)) {
            clear();
            return [];
        }

        const normalized = parsed
            .map(normalizeUser)
            .filter((user) => user.username && user.password);

        localStorage.setItem(KEYS.users, JSON.stringify(normalized));
        return normalized;
    };

    const setUsers = (users) => {
        if (!isAvailable()) {
            return false;
        }

        localStorage.setItem(KEYS.users, JSON.stringify(users));
        return true;
    };

    const saveCurrentUser = (user) => {
        const payload = {
            username: user.username,
            email: user.email || "",
            loginAt: new Date().toISOString()
        };

        writeWindowName(payload);
        setCookie(payload);
        try {
            sessionStorage.setItem(KEYS.currentUser, JSON.stringify(payload));
        } catch (error) {
            // Ignore session storage errors.
        }

        if (!isAvailable()) {
            return false;
        }

        localStorage.setItem(KEYS.currentUser, JSON.stringify(payload));
        localStorage.setItem(KEYS.lastUsername, user.username);
        return true;
    };

    const getCurrentUser = () => {
        const windowUser = readWindowName();
        const cookieUser = readCookie();
        let sessionUser = null;

        try {
            const sessionRaw = sessionStorage.getItem(KEYS.currentUser);
            if (sessionRaw) {
                sessionUser = JSON.parse(sessionRaw);
            }
        } catch (error) {
            sessionUser = null;
        }

        if (!isAvailable()) {
            if (windowUser && typeof windowUser.username === "string" && windowUser.username.trim()) {
                return windowUser;
            }
            if (cookieUser && typeof cookieUser.username === "string" && cookieUser.username.trim()) {
                return cookieUser;
            }
            if (sessionUser && typeof sessionUser.username === "string" && sessionUser.username.trim()) {
                return sessionUser;
            }
            return null;
        }

        let parsed = null;

        const raw = localStorage.getItem(KEYS.currentUser);
        if (raw) {
            try {
                parsed = JSON.parse(raw);
            } catch (error) {
                parsed = null;
            }
        }

        if (!parsed && (windowUser || cookieUser || sessionUser)) {
            parsed = windowUser || cookieUser || sessionUser;
            localStorage.setItem(KEYS.currentUser, JSON.stringify(parsed));
            if (parsed.username) {
                localStorage.setItem(KEYS.lastUsername, parsed.username);
            }
        }

        if (parsed && typeof parsed.username === "string" && parsed.username.trim()) {
            return parsed;
        }

        return null;
    };

    const logout = () => {
        clearWindowName();
        clearCookie();
        try {
            sessionStorage.removeItem(KEYS.currentUser);
        } catch (error) {
            // Ignore session storage errors.
        }

        if (!isAvailable()) {
            return false;
        }

        localStorage.removeItem(KEYS.currentUser);
        return true;
    };

    const getLastUsername = () => {
        if (!isAvailable()) {
            return "";
        }

        return localStorage.getItem(KEYS.lastUsername) || "";
    };

    const recordActivity = (type, detail = {}) => {
        if (!isAvailable()) {
            return false;
        }

        let activity = [];
        const raw = localStorage.getItem(KEYS.activity);
        if (raw) {
            try {
                activity = JSON.parse(raw);
            } catch (error) {
                activity = [];
            }
        }

        if (!Array.isArray(activity)) {
            activity = [];
        }

        activity.push({
            type,
            detail,
            at: new Date().toISOString()
        });

        localStorage.setItem(KEYS.activity, JSON.stringify(activity));
        return true;
    };

    const migrateLegacy = () => {
        if (!isAvailable()) {
            return;
        }

        const legacyUsers = localStorage.getItem("users");
        if (legacyUsers && !localStorage.getItem(KEYS.users)) {
            try {
                const parsed = JSON.parse(legacyUsers);
                if (Array.isArray(parsed)) {
                    localStorage.setItem(KEYS.users, JSON.stringify(parsed));
                }
            } catch (error) {
                // Ignore malformed legacy data and continue with a clean slate.
            }
        }

        LEGACY_KEYS.forEach((key) => localStorage.removeItem(key));
    };

    migrateLegacy();

    return {
        isAvailable,
        getUsers,
        setUsers,
        saveCurrentUser,
        getCurrentUser,
        logout,
        getLastUsername,
        recordActivity,
        clear
    };
})();
