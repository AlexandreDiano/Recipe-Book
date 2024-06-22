import Modal from "./components/modal"
import Cards from "@/components/cards.tsx";
import database from './database.json'
import {useState} from "react";
import {Button} from "./components/ui/button";
import Recipe from "@/components/recipe.tsx";
import {Input} from "@/components/ui/input.tsx";

interface IRecipeProps {
  open: boolean;
  item: number | undefined;
}

function App() {
  const [openRecipe, setOpenRecipe] = useState<IRecipeProps>({open: false, item: undefined})
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenRecipe = (item_id: number) => {
    setOpenRecipe({open: true, item: item_id})
  }

  const handleCloseRecipe = () => {
    setOpenRecipe({open: false, item: undefined})
  }

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = database.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-col justify-center content-center p-3 w-full">
      <Modal open={openRecipe.open}>
        <div className="bg-white rounded-bl-xl rounded-tl-xl text-black py-5 px-2.5  overflow-auto max-h-[90vh]">
          <Button onClick={handleCloseRecipe} className="bg-red-600 font-bold text-white">X</Button>
          <Recipe id={openRecipe.item}/>
        </div>
      </Modal>
      <h1 className="text-center text-3xl font-bold">Recipe Book</h1>

        <Input
          className="flex justify-center content-center border-white h-12"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />

      <div className="flex justify-center w-full flex-wrap">
        {filteredData.map((recipe, i) => (
          <Cards key={`${recipe.title}_${i}`} title={recipe.title} description={recipe.description} image="image"
                 action={() => handleOpenRecipe(recipe.id)}/>
        ))}
      </div>
    </div>
  )
}

export default App
