import { SimpleGrid, VStack } from "@chakra-ui/react";
import { Project } from "./Project";
import { SectionsHeader } from "../SectionsHeader";

export const Projects = () => {
  return (
    <VStack>
      <SectionsHeader title={"Mis Proyectos"} />
      <SimpleGrid
        columns={{ base: "1", sm: "1", md: "2", lg: "3", xl: "3", "2xl": "3" }}
        spacing={10}
        alignItems={"flex-end"} //para que la base de los proyectos coincidan
      >
        {/* <h2>Mis Proyectos</h2> */}
        <Project
          projectName="Portfolio"
          href="#"
          srcImageProject={
            "src/components/sections/projects/assets/portfolio.svg"
          }
          altImageProject={"imagen de chica con su CV"}
        ></Project>
        <Project
          projectName="Generador de memes"
          href="https://sami1793.github.io/editor-memes/"
          srcImageProject={"src/components/sections/projects/assets/memes.svg"}
          altImageProject={"imagen de un sobre con documentos"}
        ></Project>
        <Project
          projectName="Controlador de gastos"
          href="https://sami1793.github.io/ahorradas/"
          srcImageProject={
            "src/components/sections/projects/assets/bitcoin.svg"
          }
          altImageProject={"imagen de dinero"}
        ></Project>
        <Project
          projectName="Match 3"
          href="#" //proximamente
          srcImageProject={"src/components/sections/projects/assets/game.svg"}
          altImageProject={"imagen de videojuegos"}
        ></Project>
        <Project
          projectName="Buscador de trabajo"
          href="https://sami1793.github.io/jobs-ada/"
          srcImageProject={
            "src/components/sections/projects/assets/reunion.svg"
          }
          altImageProject={"imagen planificando una reunión"}
        ></Project>
        <Project
          projectName="To Do List"
          href="https://to-do-list-samii.vercel.app/"
          srcImageProject={
            "src/components/sections/projects/assets/lista_tareas.svg"
          }
          altImageProject={"imagen sobre lista de notas"}
        ></Project>
        <Project
          projectName="Buscador de peliculas"
          href="#" //Proximamente
          srcImageProject={
            "src/components/sections/projects/assets/peliculas.svg"
          }
          altImageProject={"imagen sobre peliculas"}
        ></Project>
        <Project
          projectName="E-commerce"
          href="https://ecommerce-ada.vercel.app/"
          srcImageProject={
            "src/components/sections/projects/assets/shopping.svg"
          }
          altImageProject={"imagen de chica usando tienda virtual"}
        ></Project>
      </SimpleGrid>
    </VStack>
  );
};
