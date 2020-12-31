import { Switch, Route } from "react-router-dom";
import Main from "_pages/public/main";
import { MAIN_PAGE_ROUTE } from "_settings/routes";

const Routes = () => (
    <Switch>
        <Route exact path={MAIN_PAGE_ROUTE} component={Main} />
    </Switch>
);

export default Routes;
