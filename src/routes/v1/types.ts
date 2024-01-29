export type JWT = {
    AccessToken: string | null;
    RefreshToken: string | null;
};

export type LoginInfo = {
    username: string,
    password: string
};