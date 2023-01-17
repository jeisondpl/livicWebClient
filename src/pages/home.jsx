import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, FeatureCardImage } from "@/widgets/cards";
import { featuresData, teamData, contactData, featuresData2 } from "@/data";

const Header = () => {
  const data = [
    {
      id: 1,
      data: () => (
        <>
          <div className="absolute top-0 h-full w-full bg-[url('/img/lina.jpg')] bg-cover bg-center" />
          <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
          <div className="max-w-8xl container relative mx-auto">
            <div className="flex flex-wrap items-center">
              {/* <section class="hero container mx-auto flex max-w-screen-lg justify-center pb-10">
          <img
            alt="Card Image"
            src="/img/livic/livic3.png"
            className=" W-20 h-20 "
          />
        </section> */}

              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-6 font-black"
                >
                  Apartamentos santa marta
                </Typography>
                <Typography variant="lead" color="white" className="opacity-80">
                  Disfrute pleno y comodidad sin igual. Todo en un mismo lugar.
                </Typography>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
      {data[0].data()}
    </div>
  );
};

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/mar.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <section class="hero container mx-auto flex max-w-screen-lg justify-center pb-10">
            <img
              alt="Card Image"
              src="/img/logo_reserva_livic.png"
              className=" W- h- "
            />
          </section>
          <div className="min-[320px]:grid-cols-1 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <Typography variant="h1" color="white" className="mb-6">
                  Apartamentos Santa Marta
                </Typography>
                <Typography variant="lead" color="white" className="opacity-80">
                  Disfrute pleno y comodidad sin igual. Todo en un mismo lugar.
                </Typography>
              </div>
            </div>

            <div className="flex flex-wrap items-center mb-500">
              <div className="max-[500px]:text-right min-[500px]:text-center ml-auto mr-auto w-full px-4 lg:w-8/12">
                <Typography variant="lead" color="white" className="opacity-80">
                  RESERVA DEL MAR se encuentra situado en la hermosa ciudad de
                  Santa Marta, Colombia, frente al mar caribe colombiano, es un
                  nuevo y moderno complejo de apartamentos, estos poseen todo lo
                  necesario para que sus días sean placenteros durante su
                  estancia
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4">
            <div></div>
            {featuresData2.map(({ title, icon }) => (
              <FeatureCardImage key={title} title={title} icon={icon} />
            ))}
            <div></div>
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Apto 831
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                La mejor estancia de tus vacaciones soñadas será nuestro Hotel,
                en el que sin dudas disfrutarás más que nada a más no poder. No
                es un Hotel y ya, es el lugar perfecto para reír, disfrutar y
                soñar.
                <br />
                <br />
                ¿Buscas un alojamiento cómodo? ¿Qué te brinde una estadía alegre
                y divertida? ¿Buscas una experiencia única? Todo eso y más en un
                sólo lugar: Nuestro Hotel sin igual. Aquí vivirás la estancia
                más increíble, mágica, memorable, irrepetible, sin igual… Una
                experiencia que nunca vas a olvidar.
              </Typography>
              <Link to={"/profile"}>
                <Button variant="outlined">Saber mas</Button>
              </Link>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="h-100 relative">
                  {/* <img
                    alt="Card Image"
                    src="/img/reserva.jpg"
                    className="h-full w-full"
                  /> */}
                  <video width="750" height="500" controls>
                    <source src="./img/830.mp4" type="video/mp4" />
                  </video>
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Apto 831
                  </Typography>
                  {/* <Typography className="font-normal text-blue-gray-500">
                    Las vacaciones de tus sueños merecen que te alojes en
                    nuestro Hotel de ensueño Vive tus sueños en nuestro Hotel de
                    ensueño Comodidad, calidez, calidad, disfrute de verdad… Lo
                    que busques de un buen Hotel en nuestro Hotel lo hallarás
                    sin dudar.
                  </Typography> */}
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Apto 1039
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                La mejor estancia de tus vacaciones soñadas será nuestro Hotel,
                en el que sin dudas disfrutarás más que nada a más no poder. No
                es un Hotel y ya, es el lugar perfecto para reír, disfrutar y
                soñar.
                <br />
                <br />
                ¿Buscas un alojamiento cómodo? ¿Qué te brinde una estadía alegre
                y divertida? ¿Buscas una experiencia única? Todo eso y más en un
                sólo lugar: Nuestro Hotel sin igual. Aquí vivirás la estancia
                más increíble, mágica, memorable, irrepetible, sin igual… Una
                experiencia que nunca vas a olvidar.
              </Typography>
              <Link to={"/profile"}>
                <Button variant="outlined">Saber mas</Button>
              </Link>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="h-100 relative">
                  {/* <img
                    alt="Card Image"
                    src="/img/reserva.jpg"
                    className="h-full w-full"
                  /> */}
                  <video width="750" height="500" controls>
                    <source src="./img/830.mp4" type="video/mp4" />
                  </video>
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Apto 1039
                  </Typography>
                  {/* <Typography className="font-normal text-blue-gray-500">
                    Las vacaciones de tus sueños merecen que te alojes en
                    nuestro Hotel de ensueño Vive tus sueños en nuestro Hotel de
                    ensueño Comodidad, calidez, calidad, disfrute de verdad… Lo
                    que busques de un buen Hotel en nuestro Hotel lo hallarás
                    sin dudar.
                  </Typography> */}
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Zonas Sociales ">
            Son elementos muy importantes de reserva del mar. Estos espacios te
            permiten compartir con tu familia y amigos sin salir de casa.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Nuestro Hotel es sinónimo de confort">
            Tú y tus seres queridos merecen lo mejor y sólo lo mejor, merecen
            sólo disfrute y confort. El disfrute y confort que hallarán en este
            Hotel en todo momento.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="RESERVA AHORA">
            Complete este formulario y nos pondremos en contacto con usted
            inmediatamente
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mx-auto grid mb-16 grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3" >
              <Input variant="standard" size="lg" label="Nombre" />
              <Input variant="standard" size="lg" label="Correo electronico" />
            </div>
            <Textarea variant="standard" size="lg" label="Mensaje" rows={8} />
            <Button variant="outlined" className="mt-8">
              Enviar
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;

// {featuresData.map(({ color, title, icon, description }) => (
//   <FeatureCardImage
//     key={title}
//     color={color}
//     title={title}
//     icon={React.createElement(icon, {
//       className: "w-5 h-5 text-white",
//     })}
//     description={description}
//   />
// ))}
