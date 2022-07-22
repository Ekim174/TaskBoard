import { createContext } from "react";
import { BoardContextInterface } from "./boartContextTypes";


export const BoardContext = createContext<BoardContextInterface>({} as BoardContextInterface);
