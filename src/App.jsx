import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

function JournalApp() {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
}

export default JournalApp;
