export interface Cell {
  id: string;
  name: string;
  path: string;
  location: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
  hero: {
    logo: string;
    secondaryLogo: string;
  };
  about: {
    title: string;
    text: string;
    images: string[];
  };
  bibleVerse: {
    text: string;
    reference: string;
  }
  image: string;
}

export const cells: Cell[] = [
  {
    id: "kadosh",
    name: "KADOSH",
    path: "/kadosh",
    location: "Vila Sônia",
    colors: {
      primary: "rgba(7, 43, 95, 1)",
      secondary: "#195291",
      background: "/imgs/kadosh/arts/background.jpeg",
    },
    hero: {
      logo: "/imgs/kadosh/arts/Kadosh_no_bg.png",
      secondaryLogo: "/imgs/kadosh/arts/K_Kadosh_no_bg.png",
    },
    about: {
      title: "Uma família reunida em Cristo",
      text: `
        A Kadosh é cercada por pessoas incríveis, que são alegres, divertidas, e acima de tudo, cheias da vida de Deus.
        Somos diferentes em histórias, personalidades e sonhos, mas fomos unidos por algo muito maior: Cristo.

        Na célula, encontramos mais do que um lugar para estar.
        Encontramos uma família.
        É onde compartilhamos nossas alegrias, enfrentamos nossas lutas, aprendemos uns com os outros e crescemos juntos na fé.

        Somos forjados por Cristo a cada encontro.
        Deus usa cada pessoa, cada conversa, cada oração e cada momento para nos transformar e nos aproximar ainda mais dEle.
        Aqui, ninguém caminha sozinho.

        Somos uma geração que escolheu viver por algo maior.
        Uma família que deseja conhecer Jesus, torná-Lo conhecido e viver tudo aquilo que Ele sonhou para nós.
      `,
      images: [
        "/imgs/kadosh/group/group_1.jpeg",
        "/imgs/kadosh/group/group_2.jpeg",
        "/imgs/kadosh/group/group_3.jpeg",
        "/imgs/kadosh/group/group_4.jpeg",
        "/imgs/kadosh/group/group_5.jpeg",
        "/imgs/kadosh/group/group_6.jpeg",
      ],
    },
    bibleVerse: {
      text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna",
      reference: "João 3:16",
    },
    image: "/imgs/kadosh/arts/Kadosh_no_bg.png",
  },

  // {
  //   id: "ekballo",
  //   name: "EKBALLO",
  //   path: "/ekballo",
  //   location: "Desconhecido",
  //   colors: {
  //     primary: "#...",
  //     secondary: "#...",
  //     background: "/imgs/ekballo",
  //   },
  //   hero: {
  //     logo: "/imgs/ekballo/arts/Ekballo_no_bg.png",
  //     secondaryLogo: "/imgs/ekballo/arts/K_Ekballo_no_bg.png",
  //   },
  //   about: {
  //     title: "EKBALLO",
  //     text: `
        
  //     `,
  //     images: [],
  //   },
  //   bibleVerse: {
  //     text: "XXXX",
  //     reference: "XXX 1:1",
  //   },
  //   image: "/imgs/ekballo/arts/Ekballo_no_bg.png",
  // },
];