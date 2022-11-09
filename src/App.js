import NonMemberApp from "./Components/Layout/NonMemberApp";
import PageSizeProvider from "./hoc/PageSizeProvider";
import Transition from "./hoc/Transition/Transition";
import "./sass/main.scss";

export default function App() {
  return (
    <PageSizeProvider>
      <Transition>
        <NonMemberApp />
      </Transition>
    </PageSizeProvider>
  );
}
