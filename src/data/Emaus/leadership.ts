export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  instagramName: string;
  instagramLink: string;
  position?: string;
}

export const leadership: LeadershipMember[] = [
  {
    name: "Eduardo Landim",
    role: "Pastor",
    image: "/imgs/emaus/team/EduardoLandim.jpeg",
    instagramName: "@eduu.landim",
    instagramLink: "https://www.instagram.com/eduu.landim?igsi=ejYyNXk5MmdnY2sz",
    position: "center",
  },
  {
    name: "Gabriel Machado",
    role: "Obreiro",
    image: "/imgs/emaus/team/GabrielMachado.jpeg",
    instagramName: "@ga_machado",
    instagramLink: "https://www.instagram.com/ga_machado?igsi=NGt4YXFmOWt0Nm9h",
    position: "center",
  },
  {
    name: "Gabriela Camargo",
    role: "Obreira",
    image: "/imgs/emaus/team/GabrielaCamargo.jpeg",
    instagramName: "@gaabicamaargo",
    instagramLink: "https://www.instagram.com/gaabicamaargo?igsi=NWsyNDZtbmZjOWdr",
    position: "center",
  },
  {
    name: "Priscila Vilar",
    role: "Discipuladora",
    image: "/imgs/emaus/team/PriscilaVilar.jpeg",
    instagramName: "@privilar",
    instagramLink: "https://www.instagram.com/privilar?igsi=MWlvNXY4ZGhmajBpaA==",
    position: "center 25%",
  },
  {
    name: "Beatriz Gomes",
    role: "Líder Kadosh",
    image: "/imgs/kadosh/team/Bibis.jpeg",
    instagramName: "@biiadgomes",
    instagramLink: "https://www.instagram.com/biiadgomes?igsi=bmtobjJrMDJ0N2dl",
    position: "center",
  },
];