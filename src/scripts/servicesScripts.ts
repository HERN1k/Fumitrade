import Constants from "../constants.ts";

export const getStaticFile: (name: string) => string = (name: string) => {
    return Constants.STATIC_FILES_PATH + name;
}