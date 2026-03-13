import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"


import "./App.css"

// Componentes

const slides = [
  {
    title: "Como Desbloquear PS3 com HEN",
    image: "https://i.ytimg.com/vi/uNZEg2G8F1Q/maxresdefault.jpg"
  },
  {
    title: "Top 10 Jogos de PS3",
    image: "https://sm.ign.com/t/ign_br/articlepage/i/igns-top-2/igns-top-25-playstation-3-games_zd4a.1280.jpg"
  },
  {
    title: "Instalar Multiman no PS3",
    image: "https://www.bing.com/th?id=OIP.bIhrS5NX5oto78HE3gZSIAHaEK"
  }
]

const posts = [
  {
    title: "Como instalar HEN no PS3",
    image: "https://th.bing.com/th/id/OIP.Q714dDPmhYQ1KcgLJpcgIwHaEK?w=200&h=200&c=10&o=6&pid=genserp&rm=2",
    category: "Tutorial"
  },
  {
    title: "Top 10 jogos de PS3",
    image: "https://th.bing.com/th/id/OIP.oJR5en9KHGICV6s-ko-YKQHaHa?w=200&h=200&c=10&o=6&pid=genserp&rm=2",
    category: "Lista"
  },
  {
    title: "Como instalar Multiman",
    image:"data:image/webp;base64,UklGRqYRAABXRUJQVlA4IJoRAABQTgCdASriALQAPp1KnUslpCmqJfD8aUATiWlu/HvlYBdwND/6jPeZf2MwYbrJdKz7B9v/WXfKfl33y/i+bn+f8K/ix/geoL+S/zj/Wf2P1k4TjgX2J+h/6L+6/lJ8Xft/+y9FPsV/yPcC/WH/OfbF7W3+d8Xb0L2Av5X/VP8N/bv3U/t/yJf7P+z/MH20fTP/i/0XwFfy/+r/8f/Fdp39y/ZV/Z7/6HYHOX8h34IMYgLjnjK1BTK6C5M85aFHqI6HjjeVco0BEk0dsuZ8KHHY6xoHXPVc/bOXKUojVnEzH+9CKS0p5yzuuOyrk9wzPYzu5zQ6WkqOEUQ8lXx+a17mR+QWfpNaf6gI2sJGbFcuc81goWL/35MagqpTJ0F76fcjH7W8GkSvgbXYYRdS2YjSX8nxoL+DaGfNgJCXUTO/+HQLNlGL6um1/XHjV7uqpSp8ArlDzUjZJnwe2LQx2AZfVytAKaUGlCcwf1EzUjIGzxK/F38gO3mOYuHv/E2BGFidj85FPtXe/9IPNDcFb3GioeaPtVIJIQWpZ8suv9+TKNhJVrg+rg941karEUXAYXWhXs4rBwkT7adVD/PLyVgvpjT6ew1QCwRkHtMe9/3N/VMzfDQV+H7invjvw+IrZ39LtiCLibnt4llvAFOiYKS9cctpECYJ45IZ5w6EHTpYpZmkrPlat2Wax0nwJqYPWTHfkSgntMooqjpI+ExoBG/r45k3EL+J/7xwPdqhVZ2fXZ4aLj/LrSxF3my/kuZRzStXpV6tbFI5LLOt/Hsh18+QIjM3sR8pFShTWtNRRIzorpEGQKx8OTZVuaX8h34IMS2iKX2FuaX8h33yAAD++0AAQPJc1M0LWQDjyDCfdQSRm78OnNO5S4OlD3OdB9t4NlBHhsTVLYNNQWccbeqtxjgESRFbfZeKYB6V96ZASf1HcSfv02bfmmoKFCmdghhd60Bfm7Iwm+IQqBVXWryAU4yt5Eb8VzfVH0nQ4GW5qerw4zOWBYPYC31dNqvJGf/dk++Dma5YqB8pKJ3hDfyj2qgnX2pSfivZjaVkIy/UuTngMoP422Owx/DnOzrARhbX1tQ9XrAYR9JHeXKflCI+owXWySr9fVyJx1VtQcrk6UeAt0yZao2Yn9gQ5eIfTYqbwhqiY+RFxhc9usHkEZC1Xhgk+FfoKd+FTSPt+/27VVR2qYwEpaW1tC+Yf0D+GUFnWx0Me+tKMSOoaKpCATpkkPpqTs+WV4arb36XZil5+Vrk9Nxvo6EUdNC6NmkiHt9fLpXwF+e2A3rLLI3eEOBwDBgK3iOVMPru0hBeHWIEMvWzd4EfOr4hxcXhglIYA15DQexEY5UbJlgVPs2euflbkABZ+DmNkYJvjx2bmxYWTsdNSX7R07LUufuo1MWE+qEtGuILfb27Y7LSXO6PHZVtzNfQsNJcuf2XOwsa72MiUyyvLF1KY/VY04DZhCePq/nzcwDXXT5OvA4v9npI+9AwSdFD24+BmX/EhBgnZbpuEKKOXkHwy+vmi8sxGXkEBv9/Q1ykkSBsRLKUSLT10FgSDWiWJ2IWLPzkSqH5k1aifyXHqSVv25w6IsXBSnbqgaBE+BxEeaeZxmYIc0iR/vvqonMtX1Zq3gRKPSFKDxkLEHUutObSi/jfBzr/dLsqp9oy3GZUIwZ5lKq4Ptz4thH8KXWaK+EMOCLeVAC/uIq3rAb5Xf+o7eHjPIlV5VB9ZS7Ms7iSbrkOUoxXpigF2Bomryw3l3NL7X4Ko2W9Oas6L2Mf+yvYb1CL0eJRq5jp4dK0+R3inGV3pXuVZo1pBzhRXpxRVpXgHM3y3rn3wYjULJNQy2Iaxlc/isT0kDRWZPQEKLBUKDT3eP0Rwqe78nlFI2okqTgSxG7Eu7ov8BFXq+pRE/ttlncZP73gVMulmePIfPQHhCJj8WM9zKdtP8BFlfafkCarLwLoPJ/45FNLnuW3DthXV0CPdVqJSlOYtu/IhQX+R76KuHSx1X2nCL0ufmEZ0AbtdZXGWrZJnMNtTXAAGOuGpfQCcPG4ZFX91cMaC0/Q0VlCP+yOjzJTDe6SX3vuIUjhZadsPPXa2znzClI1lJGQTKt2MmGgtjCwif2Ir60hXcuR1H0vZVWDT4sGpJSE4o/BWeaet2w0Vwvb829a/INMvwagAcVmgjkUBWMFYhgDkpkEp7btNnW7pcyLd8+3mUJyvH2hPpOm8N9pLjPW5bAKaO+OzGRPZwbAykM1se+u+twjujUYyCQ0WDH/In3oE+k10IEee48f82ufkm1OAsctJh7IzNBEkeb/Fc2NmRkUpYf0O5IfB+xWXsJqhFsPXlBAb3ADJX7DXbNYbbYS9Tw48z0lfIxSIB/31O4ViYzcTWwijMlA9tr4J8VhFV//C5zNMCs3wH7PpBxx0iXMgJyR68W8gDMoz9ufX1SCUJSmWXh2Kj2RD6UaNykGjfIxl7UTX/t3647QcgQyCEP8ymETJhqEhI+liGqhXYGn7BkMsmsoPj9qhIT2lgAEL+WFupqm4c6ZYYs2JhSC1miwZk7aTMw3qTEFMq9uX1DhaWGiRTukQVMuGctHv5ISNZ1eatV1ikXwnvab8jrDFztZR52Sgv9vfxArnMNToUeHYLXmM6tHx5uJ0KfXFpsLX392RPvf0zNy0c2JG3p+Pr76bboh6HYZJhR0qI4xOb1zv60toZ8UnHEYvRS5KPM/PQlSR3YfwVPan5iA2FhFsNCCGV0ug8XyfQ+ejGUYJgNWeUYMgRqItLFgPeteovbAqDnlwQmut6VxIboFvIWxXtfjk5fL5On7If/i0Sk/WWDykEzv8NrPtrPKRxDPpxY19ISw/fRuU5geZ3XtmL8uKqood8GbrW34z0fH6PIv/7pb/SQeeHoDfuqDbHsRrj40OZ+tgx7SMZkE+o+21FaQJliLMO28jitxWeh0q47utj/N/YM/ij+uZFQmuo7RZI9i/NGhPdDf2l9v6J0o6/iuJG0VPSgLCjC+KzPQnR19CMb5KmLIQqOQvxMIrCVtYEiSC+R69AbPoKHvJZe9bf+Nf5ntOvl9AYH17+XuJ5zQt1YfFCTxZjCH6JexoiJbGho5Qsk5v52lmttbinYx6CspqIXO5o+H3iJTK5c7zB4uWDxZjZ8UKlA2NC8VRWghi6UdmVtt7McFcZX53OAKoCWUysgjW6qcnKzDEqpLuLcZo2QRcILwJ12FoorwK7t2PH4H4yzaq3AA0lblB0JYTF6Yy4c4gm2wAAPfydg3NBsYphCeuKqcOkznVuPofOQrbAi4ZiveDaW9FYyCtrHtKeBYchv25d/8Ezt3ifSxcovfOAaRhwIVD06f9yNz90koVfiUUmLrauSQ9YiuqvmJju2Nb+8X3WQ9WwFqhnOYhqnAcdviClk/qJRkC1KnVNUPLSjsmcj/pcPMZbMCCPZkl0JxAE3LtUZuFt5GgbN1o4D0v80bfd3vVXPEJzfsYPD+6RJwNpF+KeU9RfyM1wS/4pu2ET8kqBc0kqIJ5IaUuHJcLFk0q+N1nivMTmtrc514Is/kccd+ZkUVXuERw1epn8/FX3jER3//JhkCu58ktvlEmEIRyh0/AWz30XfCve+SSY3KWsmH2tq1ghG2R4rqzbHHnnbgW5cqd2cRTzbbMXKHRfNPb7sRttzvUTZaGFgoH92nBjpsDs7lWQejpz/ZZYV3+dzYjqU7XtgyDYzTdN22qzpK1Jsmqvgd0QmvvkkFNQuU0xf6hASl+o8kFsjAS3cj6s9ImtTIxVXADMmbgpF1WeM5/qdXYQdlA5ENcYhD3M/CRE39uEvm0khG0uk0ykvccy4n5st3xUqQcyOKQTvrcg9w5ijPCCKpgVxO3mwFSuNshKcay4ewyeG1S/91q/K6sO+YNmL6Bz5yWLMUrJmA1VCFiPq9D+ZGKSY/Miy7Yi3vOFEnwQPL7s4L7BpzVZ4iMrNeL0RcNgoiKhD4dDqo9SLKXETS0SlwKgj+E90d98IdlaEDz6lCDBKMn4QZOH7PKX2KXx6v5zEnw2/tKcK4bgVmonBlsLe5AfDY/lB2ZdIF8Rwb4tOmZuflVmxv8R1xHHDdvysy+k1mN5Ngk7bu8aZmhE92UQj+sHN+EJPfcocjCHaQ7Zu8m7VFy9HC8TrD/hbcvUzXqFcakRKL27BLHe3rqFQZM/h7AyotKD7Tj5aPzkE++viPu88iNV13LJtjz8U9YmRJLreDFR5F65pupaTS4vg//FbNAmg/iMMhhAmOkYgz/0Hu/k8vxR/YWtoQ9ICrNWNNyFHmjbk4ru80Ii6NuIBJc0MnoXIwqLC0n8YZytcD6DezENUlw+e1LZKP1vRM/aUFzhxEDWr32ZC/utuhg5mbD3WbGAoSfKrgKXn75KejoMNNfrqw0ilG2ArQVunE3Pwxg0VL0jsPfuIGSthM0KLggg27b6NNRPK8QNmLd4Z0/nrGBojcvrgmq3qjefIIYxMJIzR19gDaHmy6sUvZ41mQB0IkladuzTuxxRNBS/G0DBnoLNdZCldavIo/VkaHN2KRnOJu7xm/631BM+vNZ0oLk9gFRERnF+mir3DF5QS5ExYH1uUfQE5ts+IEDKimF879TyGQWVAwpZAqzCaDTC7H8s7JaSqx1jSeTUKMwBNuDXZBNYB1+DPdXMVYsX0ISA24OEI98h2w+hdnx6N8xGeMfWTsDNfI36BlnF61tIr67W1F0UleMtard9waLnigblCoySZq4lw64JgRa8cjfBsug8kbxtSoZm8Fti+mRcfwwwvceSFGgrlJQet6LV8GwARSy09VLlfFUztPkCJr+FNlsKp1xCQ+72IyfpsAE76WaDj0lEZikxYZmZb8qw4ttFSV+giCoh8bgULpxia/Skr875g1MT1feWoisN0nUxXNXZvJShhDjiJTjSPvv07vXLBJQarNrtgIixPhr3HscIR6fhlkBpQvFI5HK+eH3UYp8h6VLgKP/y/beNDG3SQNCCfk9298lk1Sy0QeyvPoocySnjlqJDt4HwB/8ffDVmo3qPp/a9xQ4oZ2hMof/1oDXbB/pp5fDnMgusKgDZbZPGP5kX/65FjNtpxpeJlPbhRZGFBmzH2gG+PvwiFo75g3b3m93gpYm+uvib4DsMpLZOFMjsEkcrnqeNT+mrBiSmqllLd4JU1gPX1jhId1A/9Ix+nWLNdJoqCyn0rtuMHZiXkS1AncGeF4ez1ImntVnWdNP/wAV0exEPBgx/cx0Kl0RIIIsv10FJ2FdVyjqoUgJSJsa/sLt0Juu+zgvQt8FFhfCe7daEifc4F9TEhsnOchuP2uNXqkUWIkSrQz+ZgAC9hdh+FXiL6s8efXVC08UO+x2xSDwR4TgDEKie8BGrIE81RLrx4uj8sfS8ngb+GWF11fjZ+zIHu7i8bJbOkHLii/+O5N/1uTIkTr05FeAosnOHY9zm4oJXjA/qEQUIPfh2q1VjdTgnAawEE7Izb0CPOQcNAc4CcIA24DT6uwY1g8+x7qaYQeMiWmp1NDAKFFuVG2hW5UXwl8WRnXATEKA4c8l4OPWze/58tHQEmG38O2G/bFs1EsBJmU6oXp4F4j+DUzCKpRAkMoQTv2/FG4f1xs/cm4mFqSQh6PcXIzFqdkp6+ekXGWdOol39Tr6xuOZAL6L3l2lFWXsSZG/1NtTTRRzcxyBZFb7Efo+XcGhep9JQ48QVmX7NtO2e7Ky7GHrOqKNS9qGzh5zKPbxGzvvNk7OSSPQc+SSmIG4nqAuo3LS6NXqN/3VHKp/g3VfRMnpAjm89dcGMsffWDMTfTP0afBWTnrFt4eWsfxGyTAfUI4+nMiow2//XTEDYl0yeQaoXL//vuDjK/PsYmQ09/aCpVi3sy98a4+K8/8mN9IzHxToTPoKpGS9LwyL/8gcXtGNa4bmCx7DR/LcfX9IpyWcJh3htI/2RuIhuvma3udDxTvxL4ByyoQnSWS7j5p7rWQve38qZoqVXWjfB4TK7l6xnyNPAQoVqsS6QEiXHqmwEOm2B3YrUgdQbkAAAA=",
    category:"Tutorial"
  }
]

const games = [
  {
    
    id: "gta-vi",
    name: "Grand Theft Auto VI",
    image: "https://th.bing.com/th/id/R.1316de060b4f86a8b8019c0f94a33edb?rik=4wn9Z0E82BLTWQ&riu=http%3a%2f%2fwww.siradio.fm%2fupload%2fimages%2fgtasix.jpg&ehk=FVyrszz179KfCa9SkMSo%2bEPrABfSxRZS3ppfiEQvG4Y%3d&risl=&pid=ImgRaw&r=0",
    genre: "Ação / Mundo aberto",
    size: "18GB"
  },
  {
    id: "the-last-of-us",
    name: "The Last of Us",
    image: "https://th.bing.com/th/id/OIP.0i7KLwJfCZIRbqocPqGPKQHaIf?w=156&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Ação / Survival",
    size: "25GB"
  },
  {
    id: "god-of-war",
    name: "God of War",
    image: "https://th.bing.com/th/id/OIP.bpxOFTYdrmV5kYBy7-5N2gHaIe?w=144&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Hack and Slash",
    size: "35GB"
  },
  {
    id: "uncharted-3",
    name: "Uncharted 3",
    image: "https://tse1.mm.bing.net/th/id/OIP.mktX0_PL3tkW0zppHGQ2SwHaId?rs=1&pid=ImgDetMain&o=7&rm=3",
    genre: "Ação / Aventura",
    size: "20GB"
  },
  {
    id: "red-dead-redemption",
    name: "Red Dead Redemption",
    image: "https://th.bing.com/th/id/OIP.k4eLrDpvAL6h3VX5qGrxQQHaIh?w=165&h=187&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Mundo aberto",
    size: "8GB"
  },
  {
    id: "metal-gear-solid-5",
    name: "Metal Gear Solid 5",
    image: "https://th.bing.com/th/id/OIP.m9ZHhJw1e71kMQW4UR2zDAHaIh?w=156&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Stealth / Ação",
    size: "30GB"
  },
  {
    id: "gta-rio",
    name: "GTA Rio",
    image: "https://tse4.mm.bing.net/th/id/OIP.KWEE37Vdr846niFX9TWMJQHaI6?rs=1&pid=ImgDetMain&o=7&rm=3",
    genre: "Ação / Mundo aberto",
    size: "12GB"
  },
  {
    id: "call-of-duty",
    name: "Call of Duty: Modern Warfare",
    image: "https://th.bing.com/th/id/OIP.smQNIbvfIAH3M9UkpLLJtAHaIj?w=134&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "FPS / Ação",
    size: "40GB"
  },
  {
    id: "assassins-creed",
    name: "Assassin's Creed III",
    image: "https://th.bing.com/th/id/OIP.vmgW6MlniK4KqyC5UF1n7wHaIf?w=150&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Ação / Aventura",
    size: "28GB"
  },
  {
    id: "dark-souls",
    name: "Dark Souls",
    image: "https://th.bing.com/th/id/OIP.eevt5XIZUaLQbpFh2Wvd_QHaIh?w=159&h=182&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "RPG / Ação",
    size: "15GB"
  },
  {
    id: "minecraft",
    name: "Minecraft",
    image: "https://th.bing.com/th/id/OIP.vkbyuzg0ukdHSHwuEu-ikAHaIh?w=156&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Sandbox / Aventura",
    size: "5GB"
  },
  {
    id: "fifa-19",
    name: "FIFA 19",
    image: "https://th.bing.com/th/id/OIP.obMixmWtmRNV1aCmk-Ms6wHaHa?w=194&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Esporte",
    size: "10GB"
  },
  {
    id: "resident-evil",
    name: "Resident Evil",
    image: "https://th.bing.com/th/id/OIP.imYhf1MLc9xssIaxjdMntgHaIj?w=175&h=202&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Survival Horror",
    size: "22GB"
  },
  {
    id: "little-big-planet-3",
    name: "Little Big Planet 3",
    image: "https://th.bing.com/th/id/OIP.nLbtSUx8yzP4oM2FeNwVLgHaIj?w=128&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Plataforma / Criativo",
    size: "8GB"
  }
]

const popularGames = [
  {
    name: "GTA VI",
    id: "gta-vi"
  },
  {
    name: "The Last of Us",
    id: "the-last-of-us"
  },
  {
    name: "God of War",
    id: "god-of-war"
  }
]

const downloadList = [
  {
    id: "multiman",
    name: "MultiMAN v4.85",
    type: "Homebrew",
    size: "35 MB"
  },
  {
    id: "webman",
    name: "WebMAN Mod",
    type: "Plugin",
    size: "2 MB"
  },
  {
    id: "hen",
    name: "PS3 HEN (Última Versão)",
    type: "Exploit",
    size: "15 MB"
  },
  {
    id: "pkgi",
    name: "PKGi PS3",
    type: "Loja Homebrew",
    size: "8 MB"
  }
]

function Card({id, title, image, category}){
  return(

    <Link to={`/post/${id}`} style={{textDecoration:"none", color:"white"}}>

    <div style={{width:"250px", background:"#1c1c1c", borderRadius:"8px", overflow:"hidden", cursor:"pointer"}}>

      <img src={image} style={{width:"100%", height:"150px", objectFit:"cover"}}/>

      <div style={{padding:"10px"}}>

        <p style={{fontSize:"12px", color:"red", margin:"0 0 5px 0"}}>{category}</p>

        <h3 style={{fontSize:"16px", margin:0}}>{title}</h3>

      </div>

    </div>

    </Link>
  )
}


// Páginas (Telas)

function Home() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
  
    return () => clearInterval(interval)
  }, [])

  return (
    <div>

      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000}>

        {slides.map((slide, i) => (

          <div key={i}>

            <img src={slide.image} style={{height: "350px", objectFit: "cover"}}/>

            <p className="legend">{slide.title}</p>

          </div>

        ))}

      </Carousel>

      <h2 style={{marginTop:"30px"}}>Últimos tutoriais</h2>

      <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>

        {posts.map((post, i) => (

          <Card key={i} id={i} title={post.title} image={post.image} category={post.category}/>

        ))}

      </div>

    </div>
  )
}

function Jogos() {

  const [search, setSearch] = useState("")
  const filteredGames = games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>

      <h1>Jogos de PS3</h1>

      <input type="text" placeholder="Buscar jogo..." value={search} onChange={(e) => setSearch(e.target.value)} style={{marginTop:"20px", padding:"10px", width:"300px", borderRadius:"6px", border:"none", outline:"none"}}/>

      <div style={{display:"flex", gap:"20px", flexWrap:"wrap", marginTop:"20px"}}>

        {filteredGames.map((game, i) => (
          <Link key={i} to={`/jogo/${game.id}`} style={{textDecoration:"none", color:"white"}}>

            <div style={{width:"200px", background:"#1c1c1c", borderRadius:"8px", overflow:"hidden"}}>

              <img src={game.image} style={{width:"100%", height:"250px", objectFit:"cover"}}/>

              <div style={{padding:"10px"}}>

                <h3 style={{fontSize:"16px"}}>{game.name}</h3>

              </div>  

            </div>

          </Link>
        ))}

      </div>

    </div>
  )
}

function Tutoriais() {

  const [search, setSearch] = useState("")

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>

      <h1>Tutorias de PS3</h1>

      <input type="text" placeholder="Buscar tutorial..." value={search} onChange={(e) => setSearch(e.target.value)} style={{marginTop:"20px", padding:"10px", width:"300px", borderRadius:"6px", border:"none", outline:"none"}}/>

      <div style={{display:"flex", gap:"20px", flexWrap:"wrap", marginTop:"20px"}}>

        {filteredPosts.length > 0 ? (
          filteredPosts.map((post,i) => (
            <Card key={i} id={posts.indexOf(post)} title={post.title} image={post.image} category={post.category}/>
          ))
        ) : (
          <p>Nenhum tutorial encontrado</p>
        )}

      </div>

    </div>
  )
}

function Downloads() {
  const [search, setSearch] = useState("")
  
  // Filtra os downloads
  const filteredDownloads = downloadList.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDownload = (nome) => {
    alert(`A iniciar o download de: ${nome}`)
    // No futuro, aqui podes colocar a lógica real de download (window.open, etc)
  }

  return (
    <div>
      <h1>Downloads de PS3</h1>

      <input 
        type="text" 
        placeholder="Buscar ficheiro..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        style={{marginTop:"20px", padding:"10px", width:"300px", borderRadius:"6px", border:"none", outline:"none"}}
      />

      <div style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px"}}>
        {filteredDownloads.length > 0 ? (
          filteredDownloads.map((item, i) => (
            <div key={i} style={{background: "#1c1c1c", padding: "15px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              
              <div>
                <h3 style={{margin: 0, fontSize: "18px"}}>{item.name}</h3>
                <p style={{margin: "5px 0 0 0", fontSize: "14px", color: "#ccc"}}>{item.type} • {item.size}</p>
              </div>

              <button 
                onClick={() => handleDownload(item.name)}
                style={{background: "red", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold"}}
              >
                Baixar
              </button>

            </div>
          ))
        ) : (
          <p>Nenhum ficheiro encontrado.</p>
        )}
      </div>
    </div>
  )
}

function Post() {

  const {id} = useParams()

  const post = posts[id]

  if(!post){
    return <h2>Post não encontrado</h2>
  }

  return(
    <div>

      <h1>{post.title}</h1>

      <img src={post.image} style={{width:"100%", maxHeight:"400px", objectFit:"cover"}}/>

      <p style={{marginTop:"20px"}}>Categoria: {post.category}</p>

      <p>Aqui ficará o conteúdo completo do tutorial ou artigo</p>

    </div>
  )

}

function Game(){
  const {id} = useParams()

  const game = games.find(g => g.id === id)

  if(!game){
    return <h2>Jogo não encontrado</h2>
  }

  return(

  <div>

    <h1>{game.name}</h1>

    <img src={game.image} style={{width:"300px" , marginTop:"20px"}}/>

    <p style={{marginTop:"20px"}}><strong>Gênero:</strong> {game.genre}</p>

    <p><strong>Tamanho:</strong> {game.size}</p>

  </div>

  )

}

function App() {


  return (

    <BrowserRouter>

      <div style={{ background: "#111", minHeight: "100vh", color: "white" }}>

        <header style={{ background: "black", padding: "20px", borderBottom: "2px solid red" }}>

          <h1 style={{ margin: 0, color: "red" }}>MeuPS3</h1>

        </header>

        <div style={{ display: "flex" }}>

          <aside style={{ width: "250px", background: "#1a1a1a", padding: "20px" }}>

            <h3>Menu</h3>

            <ul style={{ listStyle: "none", padding: 0 }}>

              <li style={{ padding: "8px 0" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
              </li>

              <li style={{ padding: "8px 0" }}>
                <Link to="/jogos" style={{ color: "white", textDecoration: "none" }}>Videojogos</Link>
              </li>

              <li style={{ padding: "8px 0" }}>
                <Link to="/tutoriais" style={{ color: "white", textDecoration: "none" }}>Tutoriais</Link>
              </li>

              <li style={{ padding: "8px 0" }}>
                <Link to="/downloads" style={{ color: "white", textDecoration: "none" }}>Downloads</Link>
              </li>

            </ul>

            <h3 style={{marginTop:"30px"}}>🔥 Jogos populares</h3>

            <ul style={{listStyle:"none", padding:0}}>

              {popularGames.map((game, i) =>(

                <li key={i} style={{padding:"6px 0"}}>

                  <Link to={`/jogo/${game.id}`} style={{color:"#ccc", textDecoration:"none"}}>{game.name}</Link>

                </li>

              ))}

            </ul>

          </aside>

          <main style={{ flex: 1, padding: "20px" }}>

            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/jogos" element={<Jogos />} />

              <Route path="/tutoriais" element={<Tutoriais />} />

              <Route path="/downloads" element={<Downloads />} />

              <Route path="/post/:id" element={<Post/>} />

              <Route path="/jogo/:id" element={<Game/>}/>

            </Routes>

          </main>

        </div>

      </div>

    </BrowserRouter>

  )


}

export default App