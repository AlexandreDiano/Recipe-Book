import database from '../database.json'
import { Badge } from './ui/badge';

interface IRecipeProps {
  id: number | undefined;
}

export default function Recipe({id}: IRecipeProps) {
  const recipe = database.find(item => item.id === id)
  return (
    <div className="flex-col justify-center content-center align-middle w-96">
      <h1 className="text-3xl font-bold  text-center">{recipe?.title}</h1>

      <div className="flex justify-center content-center">
        {recipe?.vegan && (
          <Badge className="bg-green-700 text-white font-bold m-3">Receita Vegana</Badge>
        )}
        {recipe?.gluten_free && (
          <Badge className="bg-green-700 text-white font-bold m-3">Livre de Gluten</Badge>
        )}
        {recipe?.lactose_free && (
          <Badge className="bg-green-700 text-white font-bold m-3">Livre de Lactose</Badge>
        )}
      </div>

      <div className="p-2">
        <p className="text-center font-bold">ingredientes</p>

        {recipe?.ingredients.map(item => (
          <p>
            {item}
          </p>
        ))}

        <p className="text-center font-bold mt-3">Modo de Preparo</p>

        <p>{recipe?.preparation.split('\n').map(item => (
          <>{item} <br/></>
        ))}</p>


        {recipe?.tips && <p className="text-center font-bold mt-3">Dicas</p>}
        {recipe?.tips?.map(item => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  )
}