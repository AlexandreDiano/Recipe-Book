import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

interface IModalProps {
  title: string;
  description: string;
  image: string;

  action(): void
}

export default function Cards({title, description, image, action}: IModalProps) {
  return(
    <Card className="bg-white text-black m-3 max-w-96 w-96">
      <CardHeader className="h-48">
        <CardTitle className="text-center text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{image}</p>
      </CardContent>
      <CardFooter>
        <Button className="bg-yellow-300" onClick={action}>Ver Receita</Button>
      </CardFooter>
    </Card>

  )
}