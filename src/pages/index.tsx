import Head from "next/head";
import Image from "next/image";
import appPreviewImage from "../assets/app-nlw-copa-preview.png";
import iconCheckImg from '../assets/icon-check.svg';
import logoImage from "../assets/logo.svg";
import usersAvatarExampleImg from '../assets/users-avatar-example.png';

// interface HomeProps {
//   count: number;
// }

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
      <Head>
        <title>Bolão da Copa</title>
      </Head>

      <main>
        <Image
          src={logoImage}
          alt="Logo"
        />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div className="flex mt-10 items-center gap-2">
          <Image 
            src={usersAvatarExampleImg}
            alt="Imagem de exemplo de usuários do App NLW Copa"
          />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex">
          <input
            className="flex-1 px-6 py-4" 
            type="text" 
            required 
            placeholder="Qual o nome do seu bolão?" 
          />
          <button 
            className="bg-yellow-500"
            type="submit"
          >
              Criar meu bolão
          </button>
        </form>

        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>

        <div>
          <div>
            <Image 
              src={iconCheckImg}
              alt=""
            />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div>
          <Image 
              src={iconCheckImg}
              alt=""
            />
            <div>
              <span>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImage}
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
        quality={100}
      />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3333/pools/count')
//   const data = await res.json()

//   return {
//     props: {
//       count: data.count,
//     }
//   }
// }
