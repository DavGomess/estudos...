import { Card, Heading } from "@radix-ui/themes"

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Heading>Olá, Next.js!</Heading>
        <Card>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        </Card>
      </main>
    </div>
  );
}
