"use client";

import API from "@/api/index.api";
import DealForm from "@/components/DealForm";
import { createFormData } from "@/utils/createFormData.util";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { toast } from "react-toastify";

function CreateDealForm() {
  const { mutateAsync: createDeal } = useMutation({
    mutationFn: API.deals.createDeal,
    onSuccess: () => {
      router.push("/my/deals");
    },
  });
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmitCreatePost: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const dealFormData = { title, content, location, price, image };

    try {
      const formData = createFormData(dealFormData);
      await createDeal(formData);
      toast.success("판매글 생성에 성공했습니다.");
    } catch (e) {
      toast.error("판매글 생성에 실패했습니다.");
    }
  };

  return (
    <DealForm
      title={title}
      content={content}
      location={location}
      price={price}
      image={image}
      setTitle={setTitle}
      setContent={setContent}
      setLocation={setLocation}
      setPrice={setPrice}
      setImage={setImage}
      onSubmit={handleSubmitCreatePost}
      buttonLabel="판매글 작성하기"
    />
  );
}

export default CreateDealForm;
