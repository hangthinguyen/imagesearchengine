import { useCallback, useEffect, useState } from "react";
import ItemsList from "./ItemsList";
import Search from "./Search";
import { fetchImages } from "./api/unsplash";

function App() {
  const [input, setInput] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages("cat").then((imageResp) => {
      setImages(imageResp.results);
    });
  }, []);

  const handleSearchClick = useCallback(
    async (e) => {
      e.preventDefault();

      const imageResp = await fetchImages(input);
      setImages(imageResp.results);
    },
    [input]
  );

  return (
    <div className="h-screen flex justify-center">
      <header className="h-full my-16 flex flex-col justity-center items-center w-10/12">
        <h1 className="text-blue-400 text-6xl font-medium">Unsplash Image</h1>
        <Search setInput={setInput} onClick={handleSearchClick} />
        <ItemsList images={images} />
      </header>
    </div>
  );
}

export default App;
