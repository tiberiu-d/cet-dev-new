"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { OnePagerType } from "@/types/escalation";
type OnePagerProps = {
  ESCALATION_ID: string;
};

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import ReviewLeaf from "./review-leaf";

// get the data
const getOnePagerData = async (escalationID: string): Promise<OnePagerType> => {
  const response = await axios.get(
    `http://localhost:1999/api/escalations/${escalationID}`
  );
  return response.data.result[0];
};

const OnePager = ({ ESCALATION_ID }: OnePagerProps) => {
  const {
    data: onePager,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["specificEntry", ESCALATION_ID],
    queryFn: () => getOnePagerData(ESCALATION_ID),
  });

  if (isLoading) {
    return <div>Loading Escalation details</div>;
  }

  if (isError) {
    return <div>some error</div>;
  }

  if (onePager) {
    return (
      <div className="w-full h-full flex flex-col items-start">
        <div className="grid grid-cols-2 gap-5 mx-auto pt-6">
          <div className="coloana1 flex flex-col items-start gap-5 relative rounded-md border-2">
            <span className="p-2 rounded-xl border-2 absolute left-6 -top-5 bg-blue-100 text-sm shadow-md">
              Customer Details
            </span>
            <div className="pt-8 px-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              aperiam sit voluptatum, consequuntur sed dolor minus quia rerum.
              Ad soluta odio repellendus porro! Quas rerum ullam inventore eum
              sunt voluptatum repudiandae atque animi! Doloremque cumque rerum
              dolore temporibus ad porro deserunt quaerat ut repudiandae nisi
              quidem debitis est eos quas, veritatis suscipit ipsum, maiores
              labore ab minus ex obcaecati. Repellendus rerum adipisci
              voluptates, soluta qui quaerat ab recusandae rem possimus
              similique, delectus quisquam, nemo minus animi ad totam doloribus
              porro? Quis dolor doloribus tenetur, similique necessitatibus
              aspernatur officiis molestias sapiente, libero nemo laboriosam
              blanditiis quod, reprehenderit perferendis repudiandae mollitia
              voluptas! Sed nesciunt voluptatem perspiciatis inventore magni
              quidem harum animi non aliquam eveniet ut dolores molestiae at
              architecto, eius, dignissimos eos quis sunt tempore. Dolorum quos,
              in soluta eveniet non earum numquam totam nesciunt facere ullam
              vitae explicabo repudiandae consequatur ex architecto vel aliquid,
              atque minima laboriosam perferendis distinctio expedita possimus?
              Blanditiis, doloremque dignissimos veritatis in cum quisquam! Nisi
              eos obcaecati excepturi, deserunt modi adipisci doloribus cumque
              ratione quidem sequi ex alias tenetur? Similique consectetur
              suscipit voluptates ad repudiandae. Tempora ad saepe, nulla non
              obcaecati provident fugit ratione quaerat rem quibusdam, quis,
              aliquid porro praesentium explicabo. Iusto esse illo doloremque
              corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ea officiis voluptatem corporis? Iure, illo. Amet pariatur odio
              reiciendis voluptas atque quam iure tempore recusandae, animi
              suscipit culpa eos, unde minima expedita ipsam fugit eaque
              possimus. Voluptatibus alias ea esse reprehenderit aspernatur
              ipsum necessitatibus rem dignissimos! Consequuntur error adipisci
              ea vitae, illum aperiam delectus nobis unde ipsam est ipsa
              similique dolor aut! Quia illo officiis, soluta corporis ipsa
              aperiam reprehenderit consequuntur? Sit placeat ipsa praesentium
              delectus. Vero, veritatis qui nobis omnis dolores eius nesciunt
              sunt pariatur delectus! Voluptate expedita asperiores aliquid odio
              perferendis, tempora quidem tempore hic ex nisi voluptas sunt
              veniam beatae minima libero quibusdam, ab dolorum earum! Sequi,
              repellendus quam doloribus consequatur vitae ad, libero nesciunt
              cupiditate harum eos eius similique magni fuga nisi quos sunt
              nobis. Excepturi eveniet veritatis rem enim iste minima mollitia
              non repudiandae dolorem, omnis quidem adipisci quasi temporibus
              distinctio maxime, quaerat esse sit neque aliquid possimus? Magni
              ratione facilis quas rem cum minima, maiores odit quae,
              consequuntur sequi laboriosam voluptate? Incidunt quae sequi iure
              tempora, eveniet aliquam, perspiciatis quidem nemo ducimus dolor
              libero deserunt quam perferendis recusandae, eligendi distinctio
              est ab numquam? Minima explicabo et provident ab officia vitae
              tempore consequatur modi assumenda a.
            </div>
          </div>
          <div className="coloana2 flex flex-col items-start gap-5 relative rounded-md border-2">
            <span className="p-2 rounded-xl border-2 absolute right-5 -top-5 bg-green-100 text-sm shadow-md">
              Vitesco Details
            </span>
          </div>
        </div>
      </div>
    );
  }
};
export default OnePager;
