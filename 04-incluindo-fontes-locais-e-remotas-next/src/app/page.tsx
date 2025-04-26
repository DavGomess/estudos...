import { Box, Heading } from "@radix-ui/themes"
import styles from "./page.module.scss"
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
      <Box p="4">
          <Heading as="h1" size={"9"} weight="bold">Conheça a família Macbook.</Heading>
         
            <Heading weight={"regular"} mb={"7"} mt={"3"}>Agora com novos modelos M3</Heading>
            <div className={styles.card}>
              <div className={styles.cardMacbookAir}>

                <Image
                  src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
                  alt="Macbook Air"
                  width={320}
                  height={180} />
                  <div className={styles.description}>
                    <Heading size={"8"} weight={"medium"}>Macbook Air</Heading>
                    <Heading size={"8"} weight={"medium"}>de 13 e 15 pol.</Heading>
                    <Heading size={"4"} mt={"3"} weight={"bold"}>Chip M2 ou M3</Heading>  
                  </div>
                <div className={styles.infoProduct}>
                  <Heading size={"2"} weight={"medium"}>Superfinos e rápidos para trabalhar, jogar ou criar aonde quer que você vá.</Heading>
                  <Heading size={"2"} weight={"bold"}>A partir de R$ 916,58/mês ou R$ 10.999*</Heading>
                </div>
                <div className={styles.buttons}>
                  <button className={styles.buttonLearnMore}>Saiba Mais</button>
                  <button className={styles.buttonBuy}>Comprar</button>
                </div>
              </div>

              <div className={styles.cardMacbookPro}>
                <Image
                  src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
                  alt="Macbook Pro"
                  width={320}
                  height={180} />
                  <div className={styles.description}>
                    <Heading size={"8"} weight={"medium"}>Macbook Pro</Heading>
                    <Heading size={"8"} weight={"medium"}>de 14 e 16 pol.</Heading>
                    <Heading size={"4"} mt={"3"} weight={"bold"}>Chip M3, M3 Pro ou M3 Max</Heading>  
                  </div>
                <div className={styles.infoProduct}>
                  <Heading size={"2"} weight={"medium"}>Os notebooks Mac mais avançados para fluxos de trabalho pesados.</Heading>
                  <Heading size={"2"} weight={"bold"}>A partir de R$ 1.541,58/mês ou R$ 18.499*</Heading>
                </div>
                <div className={styles.buttons}>
                  <button className={styles.buttonLearnMore}>Saiba Mais</button>
                  <button className={styles.buttonBuy}>Comprar</button>
                </div>
              </div>
            </div>
         
        </Box>
      </main>
    </div>
  );
}
