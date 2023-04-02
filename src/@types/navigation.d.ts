import { Note } from "../contexts/SQlite";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Create: undefined;
            Note: string | number;
            Edit: Note;

        }
    }
}