"use client";

import { useQuery, useIsFetching } from "@tanstack/react-query";

const TestPage = () => {
  const { data, isLoading, isError, isSuccess } = useQuery<any>({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("http://localhost:2999/api/sidebar_data").then((res) => res.json()),
  });

  if (isLoading) {
    return <div>still loading the data ....</div>;
  }

  const escalationsData = data.results;
  console.log(escalationsData);

  if (isError) {
    return <div>something went wrong on the way to heaven...</div>;
  }

  return (
    <div>
      {escalationsData?.map((item: any) => (
        <div key={item.id}>{item.TITLE}</div>
      ))}
    </div>
  );
};
export default TestPage;
