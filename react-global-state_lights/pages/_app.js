import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialLights = [
  { id: 1, name: "", isOn: false },
  { id: 2, name: "", isOn: false },
  { id: 3, name: "", isOn: false },
  { id: 4, name: "", isOn: false },
  { id: 5, name: "", isOn: false },
  { id: 6, name: "", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} />
    </Layout>
  );
}
