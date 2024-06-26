// components/MyProfile.js
'use client'
import { useEffect, useState } from "react";
import { Card, Chip, CardBody, User, Input, Button } from "@nextui-org/react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { ProfileInput } from "../utils/ProfileInput";
import { useSelector } from "react-redux";
import viewStudentProfile from "@/utils/db/viewStudentProfile";
import { LoadingSkeleton } from "./loading/LoadingSkeleton";

const MyProfile = () => {
  const { id } = useSelector((state) => state.login);
  const { action } = useSelector((state) => state.studentProfileActions);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    name: "",
    avatar: "",
    email: "",
    age: "",
    program: "",
    university: "",
    status: "",
    city: "",
    phone: "",
    address: "",
    registration_date: "",
    university_semester: "",
    isVisaCompleted: false,
    isTrcCompleted: false,
    isUniversityRegistrationProcessCompleted: false,
    isMentorShipCompleted: false,
  });

  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await viewStudentProfile(id);
        setData((prev) => ({
          ...prev,
          ...profile,
          registration_date: profile.created_at,
        }));
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
      setEditedData({});
    };

    fetchProfile();
  }, [id]);

  const handleInputChange = (content, value) => {
    setEditedData((prev) => ({
      ...prev,
      [content]: value,
    }));
  };

  const saveChanges = () => {
    alert(JSON.stringify(editedData)); // Example alert for editedData
  };

  if (loading) {
    return (
      <>
        <LoadingSkeleton
          isWidthFull
          maxW={"500"}
          mode={"label"}
          repeat={1}
          textLine={2}
        />
        <LoadingSkeleton
          mode={"text"}
          maxW={"400"}
          repeat={4}
          isWidthFull
          textLine={4}
        />
      </>
    );
  }

  return (
    <div className="w-full flex flex-col items-center h-max justify-start max-h-screen" style={{height: "100vh"}}>
      <Card className="w-full max-w-3xl mx-auto bg-navy-light text-white rounded-xl shadow-md">
        <CardBody className="flex flex-row items-center justify-between p-4 text-white">
          <User
           avatarProps={{ src: data?.avatar, alt: data?.name }}
           className="cursor-pointer scale-110" 
           description={data?.phone}
           name={data?.name}
          />
          <Chip variant="bordered">
            {data?.email}
          </Chip>
        </CardBody>
      </Card>

      <hr className="border-white/50 w-full max-w-3xl mt-2" />

      <div className="w-full max-w-3xl flex flex-col items-center justify-center mt-4 space-y-4">
        <div className="w-full flex flex-row gap-2">
          <ProfileInput
            content={"city"}
            label={"Şehir"}
            val={data?.city}
            onChange={handleInputChange}
          />
          <ProfileInput
            content={"address"}
            label={"Adres"}
            val={data?.address}
            onChange={handleInputChange}
          />
        </div>

        <Input
          value={data?.status}
          label={"Kayıt Durumunuz"}
          color={
            data?.status === "onaylanmış"
              ? "success"
              : data?.status === "beklemede"
              ? "warning"
              : "danger"
          }
          readOnly
          startContent={<GrStatusGoodSmall className="w-4 h-4" />}
          isFullWidth
        />

        <div className="w-full flex flex-row gap-2">
          <ProfileInput
            content={"university"}
            label={"Üniversiteniz"}
            val={data?.university}
          />
          <ProfileInput
            content={"program"}
            label={"Bölümünüz"}
            val={data?.program}
            onChange={handleInputChange}
          />
          <ProfileInput
            content={"university_semester"}
            label={"Sömestr"}
            val={data?.university_semester}
            onChange={handleInputChange}
            
          />
        </div>

        <div className="w-full flex flex-row gap-2">
          <ProfileInput
            content={"registration_date"}
            label={"Kayıt Tarihi"}
            val={data?.registration_date}
            onChange={handleInputChange}
          />
          <ProfileInput
            content={"age"}
            label={"Yaşınız"}
            val={data?.age}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col items-center justify-start">
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between gap-2">
                <ProfileInput
                    content={"isUniversityRegistrationProcessCompleted"}
                    label={"Üniversite Kayıt İşlemleri"}
                    isBool
                    val={data?.isUniversityRegistrationProcessCompleted}
                    onChange={handleInputChange}
                />
                <ProfileInput
                    content={"isMentorShipCompleted"}
                    label={"Mentör Programım"}
                    isBool
                    val={data?.isMentorShipCompleted}
                    onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                <ProfileInput
                    content={"isVisaCompleted"}
                    label={"Vize İşlemleri"}
                    isBool  
                    val={data?.isVisaCompleted}
                    onChange={handleInputChange}
                    color="success"
                />

                <ProfileInput
                    content={"isTrcCompleted"}
                    label={"Oturum İşlemleri"}
                    isBool  
                    val={data?.isTrcCompleted}
                    onChange={handleInputChange}
                />
              </div>
              {action === "edit" && (
                <Button
                    color="success"
                    variant="flat"
                    className="w-full mt-2"
                    onClick={saveChanges}
                >
                  Değişiklikleri Kaydet
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
