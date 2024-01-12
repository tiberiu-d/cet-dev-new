"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type OnePagerProps = {
  ESCALATION_ID: string;
};

type OnePagerType = {
  ID: string;
  QKAM: string;
  CREATED_ON: string;
  STATUS: string;
  TYPE: string;
  ESCAL_DATE: string;
  DESCAL_DATE: string;
  CUSTOMER_GROUP_CODE: string;
  CUSTOMER_GROUP: string;
  CUSTOMER_BRAND_CODE: string;
  CUSTOMER_BRAND: string;
  CUSTOMER_LOCATIONS: string;
  LEVEL: string;
  ADDITIONAL_BRANDS: string;
  VT_DIVISION_CODE: string;
  VT_DIVISION_NAME: string;
  VT_BUSINESS_UNIT_CODE: string;
  VT_BUSINESS_UNIT_NAME: string;
  VT_PLANT_CODE: string;
  VT_PLANT: string;
  TITLE: string;
  AFFECTED_PARTS: number;
  AFFECTED_VEHICLES: number;
  DESCRIPTION: string;
  CUSTOMER_IMPACT: string;
  RECURRING: boolean;
  SUPPLIER: string;
  CONSUMER_IMPACT: string;
  CAR_MODELS: string;
  CAR_PLATFORMS: string;
};

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

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
        <div className="grid grid-cols-4 gap-1 mx-auto">
          {/* row 1 */}
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>QKAM</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.QKAM}</CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Basic Data</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-sm min-w-[150px]">modified on</p>
                <Separator orientation="vertical" className="mx-2 h-6" />
                <p>{}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm min-w-[150px]">status</p>
                <Separator orientation="vertical" className="mx-2 h-6" />
                <p>{onePager?.STATUS}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Sub Type</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.TYPE}</CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Additional Dates</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-sm min-w-[150px]">de-escalation date</p>
                <Separator orientation="vertical" className="mx-2 h-6" />
                <p>{onePager?.DESCAL_DATE}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm min-w-[150px]">est. de-escalation date</p>
                <Separator orientation="vertical" className="mx-2 h-6" />
                <p>{}</p>
              </div>
            </CardContent>
          </Card>
          {/* row 2 */}
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Customer Group</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.CUSTOMER_GROUP}</CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Customer Brand</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.CUSTOMER_BRAND}</CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Customer Location</CardTitle>
            </CardHeader>
            <CardContent>no data</CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Customer Escalation Level</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.LEVEL}</CardContent>
          </Card>
          {/* row 3 */}
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Additional Customer Brands</CardTitle>
            </CardHeader>
            <CardContent>no data</CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Vitesco Division</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.VT_DIVISION_NAME}</CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Vitesco Business Unit</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.VT_BUSINESS_UNIT_NAME}</CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Vitesco Plant</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.VT_PLANT}</CardContent>
          </Card>
          {/* row 4 */}
          <Card className="col-span-2 hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Customer Impact</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.CUSTOMER_IMPACT}</CardContent>
          </Card>
          <Card className="col-span-2 hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Consumer Impact</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.CONSUMER_IMPACT}</CardContent>
          </Card>
          {/* row 5 */}
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Affected parts & vehicles</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-sm min-w-[150px]">affected parts</p>
                <Separator orientation="vertical" className="mx-2 h-6" />
                <p>{onePager?.AFFECTED_PARTS}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm min-w-[150px]">affected vehicles</p>
                <Separator orientation="vertical" className="mx-2 h-6" />
                <p>{onePager?.AFFECTED_VEHICLES}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Vehicle details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-sm min-w-[150px]">platform</p>
                <Separator orientation="vertical" className="mx-2 h-6" />
                <p>{onePager?.CAR_PLATFORMS}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm min-w-[150px]">model</p>
                <Separator orientation="vertical" className="mx-2 h-6" />
                <p>{onePager?.CAR_MODELS}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Supplier</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.SUPPLIER}</CardContent>
          </Card>
          <Card className="hover:bg-gray-50">
            <CardHeader>
              <CardTitle>Is Reccuring?</CardTitle>
            </CardHeader>
            <CardContent>{onePager?.RECURRING}</CardContent>
          </Card>
        </div>
      </div>
    );
  }
};
export default OnePager;
