"use client";

import { Table } from "antd";
import { mockData } from "@/database/MOCK_DATA.js";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: "30%",
  },
  {
    title: "Age",
    dataIndex: "age",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
];

const data = [
  {
    key: 1,
    name: "Brunhilde Barock",
    age: 44,
    address: "981 Londonderry Alley",
  },
  {
    key: 2,
    name: "Hugh Godball",
    age: 64,
    address: "23339 Summit Trail",
  },
  {
    key: 3,
    name: "Dorie MacGillicuddy",
    age: 64,
    address: "6200 6th Alley",
  },
  {
    key: 4,
    name: "Latia Pengelley",
    age: 23,
    address: "7 Hazelcrest Lane",
  },
  {
    key: 5,
    name: "Sylvester Kyne",
    age: 69,
    address: "09197 Randy Circle",
  },
  {
    key: 6,
    name: "Maribeth Antuk",
    age: 22,
    address: "28 Pine View Park",
  },
  {
    key: 7,
    name: "Benoit Lincey",
    age: 27,
    address: "56272 Knutson Plaza",
  },
  {
    key: 8,
    name: "Ludvig Flanner",
    age: 25,
    address: "96 Kennedy Place",
  },
  {
    key: 9,
    name: "Jaime Adney",
    age: 43,
    address: "8148 Ronald Regan Terrace",
  },
  {
    key: 10,
    name: "Morten Maffione",
    age: 56,
    address: "035 Morrow Crossing",
  },
  {
    key: 11,
    name: "Laetitia Rashleigh",
    age: 44,
    address: "8580 Monica Circle",
  },
  {
    key: 12,
    name: "Devan Woolrich",
    age: 56,
    address: "827 Grover Crossing",
  },
  {
    key: 13,
    name: "Orran Dono",
    age: 36,
    address: "06541 Larry Road",
  },
  {
    key: 14,
    name: "Anastasia Merill",
    age: 33,
    address: "4239 Corscot Point",
  },
  {
    key: 15,
    name: "Wain Laterza",
    age: 23,
    address: "058 Colorado Avenue",
  },
  {
    key: 16,
    name: "Sheelagh Charnley",
    age: 46,
    address: "8423 Trailsway Avenue",
  },
  {
    key: 17,
    name: "Marni McAster",
    age: 44,
    address: "6 Nobel Center",
  },
  {
    key: 18,
    name: "Feodora Vsanelli",
    age: 43,
    address: "86 Vera Trail",
  },
  {
    key: 19,
    name: "Cos MacDaid",
    age: 43,
    address: "0 Karstens Junction",
  },
  {
    key: 20,
    name: "Vince Armall",
    age: 35,
    address: "019 Toban Hill",
  },
  {
    key: 21,
    name: "Murdock Dabner",
    age: 25,
    address: "27291 Bunting Trail",
  },
  {
    key: 22,
    name: "Anissa Enrique",
    age: 48,
    address: "80 Debs Terrace",
  },
  {
    key: 23,
    name: "Risa Rapin",
    age: 52,
    address: "332 Huxley Center",
  },
  {
    key: 24,
    name: "Ralf Tuckey",
    age: 27,
    address: "43 Prairie Rose Parkway",
  },
  {
    key: 25,
    name: "Hetty Edmondson",
    age: 65,
    address: "30366 Tony Lane",
  },
  {
    key: 26,
    name: "Ofilia Miranda",
    age: 30,
    address: "3 Carioca Place",
  },
  {
    key: 27,
    name: "Myrlene Yurkiewicz",
    age: 27,
    address: "1 Barnett Junction",
  },
  {
    key: 28,
    name: "Mikel Beaconsall",
    age: 73,
    address: "4418 Bayside Circle",
  },
  {
    key: 29,
    name: "Kyle Le Bosse",
    age: 58,
    address: "8 Toban Place",
  },
  {
    key: 30,
    name: "Kelcey Giroldi",
    age: 31,
    address: "1 Canary Pass",
  },
  {
    key: 31,
    name: "Rheta Deamer",
    age: 52,
    address: "68 Northview Place",
  },
  {
    key: 32,
    name: "Elnar Grinaugh",
    age: 53,
    address: "582 Shopko Point",
  },
  {
    key: 33,
    name: "Min Hardi",
    age: 72,
    address: "6940 Brentwood Center",
  },
  {
    key: 34,
    name: "Dory Bloss",
    age: 64,
    address: "72538 Golden Leaf Crossing",
  },
  {
    key: 35,
    name: "Prisca Llewhellin",
    age: 64,
    address: "7185 Grover Drive",
  },
  {
    key: 36,
    name: "Sibylla D'Alessandro",
    age: 65,
    address: "4653 Boyd Pass",
  },
  {
    key: 37,
    name: "Hesther Hardstaff",
    age: 39,
    address: "7136 Sutherland Drive",
  },
  {
    key: 38,
    name: "Bone Syratt",
    age: 62,
    address: "876 Norway Maple Crossing",
  },
  {
    key: 39,
    name: "Marje Phillipps",
    age: 49,
    address: "4499 Westport Avenue",
  },
  {
    key: 40,
    name: "Gardener Enever",
    age: 47,
    address: "6323 Debs Pass",
  },
  {
    key: 41,
    name: "Booth Labrenz",
    age: 67,
    address: "8874 Division Circle",
  },
  {
    key: 42,
    name: "Bing Downs",
    age: 30,
    address: "3538 Farragut Terrace",
  },
  {
    key: 43,
    name: "Viva Coram",
    age: 74,
    address: "62 Farmco Court",
  },
  {
    key: 44,
    name: "Jodi Rodriguez",
    age: 49,
    address: "3583 Dawn Plaza",
  },
  {
    key: 45,
    name: "Maia Shilston",
    age: 28,
    address: "4055 Erie Junction",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const EscaTable = () => {
  return (
    <>
      <p>here goes nothing ...</p>
      <Table
        columns={columns}
        dataSource={mockData}
        size="large"
        bordered
        pagination={{
          pageSize: 12,
          showQuickJumper: true,
          showSizeChanger: false,
        }}
        footer={() => "something about the footer"}
        onRow={(record) => {
          return {
            onClick: (event) => {},
            onContextMenu: (event) => {},
          };
        }}
      />
    </>
  );
};
export default EscaTable;
