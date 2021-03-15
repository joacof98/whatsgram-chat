import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationsProvider } from "./contexts/ConversationsProvider";
import { SocketProvider } from "./contexts/SocketProvider";

function App() {
  const [id, setId] = useLocalStorage("id", "");
  return id ? (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  ) : (
    <Login onSubmitId={setId} />
  );
}

export default App;
