import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState({});

  //get specific id when i clicked on the button
  const { id } = useParams();

  //also get data when i clicked on the button
  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  console.log(phone);

  return (
    <div>
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
