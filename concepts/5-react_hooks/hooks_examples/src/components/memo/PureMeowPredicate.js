import { memo } from "react";
import Meow from "./Meow";

const PureMeowPredicate = memo(Meow, (prevProps, nextProps) => prevProps.name === nextProps.name);

export default PureMeowPredicate;
