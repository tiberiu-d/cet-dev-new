import { Chrono } from "react-chrono";

const LOREM10 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, est!";
const LOREM15 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos a rerum quibusdam sequi voluptatum.";
const LOREM20 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at vel ea perspiciatis eligendi dicta sapiente necessitatibus, provident animi tempore!";

const items = [
  {
    title: "May 2023",
    cardTitle: "Example Event Name (and I can add a URL to it too)",
    url: "http://www.history.com",
    cardSubtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, delectus corrupti earum hic laborum fugit.",
    cardDetailedText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta amet temporibus quam magnam adipisci sapiente quisquam veritatis, nisi corrupti!",
  },
  {
    title: "June 2023",
    cardTitle: "Example Event Name (and I can add a URL to it too)",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et laudantium commodi dignissimos animi voluptates, non, atque, facilis praesentium at repellendus. Molestias deleniti officia debitis facere voluptates, aspernatur unde adipisci praesentium aliquid sequi tempore sint maiores recusandae accusamus commodi porro magnam et reiciendis ea, excepturi quisquam. Dolorum assumenda tempore quod?",
  },
  {
    title: "July 2023",
    cardTitle: "Example Event Name (and I can add a URL to it too)",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facilis placeat maiores vitae perferendis fuga ad eveniet, consectetur asperiores a? Quo temporibus, nisi facere magnam esse odio error dicta quae. Quas error ipsam rerum earum suscipit libero officia illum nisi cum provident ab, dignissimos nihil numquam, possimus quis tenetur eaque impedit reiciendis aperiam beatae a molestias. Fuga optio molestiae non vel culpa error tempora aliquid, voluptas saepe, corrupti sed quisquam, molestias architecto debitis veniam perferendis!",
  },
  {
    title: "August 2023",
    cardTitle: "Example Event Name (and I can add a URL to it too)",
    url: "http://www.history.com",
    cardSubtitle: LOREM15,
    cardDetailedText: LOREM20,
  },
  {
    title: "May 2023",
    cardTitle: "Example Event Name (and I can add a URL to it too)",
    url: "http://www.history.com",
    cardSubtitle: LOREM15,
    cardDetailedText: LOREM20,
  },
];

const TimelinePage = () => {
  return (
    <div className="w-full h-full">
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
};
export default TimelinePage;
