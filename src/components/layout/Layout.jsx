import classes from "./Layout.module.css";
import MainNavigationLayout from "./MainNavigationLayout";

export default function Layout(props) {
  return (
    <div>
      <MainNavigationLayout />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
