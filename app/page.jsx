import Users from "@/components/Users";
import Image from "next/image";

export const metadata = {
  title: "La paginita",
};

export default function HomePage() {
  return (
    <section>
      <h1>Hola Juancho</h1>
      <Users />

      {/* averiguar como se suben imgs */}
      {/* <Image src={uñasDiseño1} /> */}
    </section>
  );
}

//usar "use client para volverlo un client component"
//si no se usa el "use client" es un server component
