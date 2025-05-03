import Image from "next/image";
import  styles  from "./page.module.css"


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>O Fascinante Planeta Saturno</h1>
        <div>


          <Image
            src={"/image1.png"}
            alt="planeta saturno"
            width={600}
            height={328}
          />
          <p>Saturno é o sexto planeta a partir do Sol e é conhecido pelos seus
            impressionantes anéis. Ele é o segundo maior planeta do Sistema Solar,
            ficando atrás apenas de Júpiter. A composição principal de Saturno é
            gás, o que o torna um gigante gasoso.</p>
        </div>
        <div>
        <h2 >Características Físicas</h2>
        <p>Saturno possul uma atmosfera composta predominantemente por
          hidrogênio e hélio. O planeta tem uma densidade extremamente baixa, o
          que significa que, se fosse possivel colocá-lo em uma imensa banheira,
          ele flutuaria.</p>
        </div>
        <div>
        <h2 >Os Anéis de Saturno</h2>
        <p>Uma das caracteristicas mais marcantes de Saturno são seus anéis. Eles
          são feltos de pedaços de gelo, rocha e poeira que orbitam o planeta.
          Embora pareçam sólidos, são formados por particulas separadas, que
          variam em tamanho, de pequenos grãos de poeira até rochas de vários
          metros.</p>
        </div>
        <div>
        <Image
          src={"/image2.png"}
          alt="anéis de saturno"
          width={600}
          height={328}
        />
        <h2>Satélites Naturais</h2>
        <p>Saturno possui mais de 80 luas confirmadas, sendo Tita a maior e uma
          das mais interessantes, por possuir uma atmosfera densa e mares de
          metano líquido. Outras luas menores, como Encélado, também
          despertam grande interesse cientifico devido a possiveis oceanos
          subterrâneos.</p>
        </div>
        <div>
        <Image
          src={"/image3.png"}
          alt="satélites naturais"
          width={600}
          height={328}
        />
        </div>
      </main>
      <footer>Publicado em: Outubro de 2024</footer>
    </div>
  );
}
