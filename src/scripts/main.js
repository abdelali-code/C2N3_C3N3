import { stepper } from "./component/showBar";
import { preambule } from "./component/preambule";
import { addToparent } from "./helpers/createElement";
import { recommandations } from "./component/recommandations";

const main = document.getElementById("quiz");

// add stepper;
const showBar = stepper();
const prem = preambule();
const recomm = recommandations();

addToparent(main, [showBar, prem, recomm]);
