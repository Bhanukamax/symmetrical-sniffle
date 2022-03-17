import { useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import httpClient from "../../util/http-client";
import PostFormView from "./PostForm.view";

const PostFormComponent = ({ refetch }: any) => {
  const methods = useForm();
  const editorRef = useRef(null);

  const handleUploadFile = async (file: any): Promise<any> => {
    const formData: any = new FormData();
    formData.append("image", file);

    return httpClient.post("uploads", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handleFormSubmit = async (values: any) => {
    const editor: any = editorRef?.current;
    let html = "";
    if (editor) {
      html = editor.querySelector(".ql-editor").innerHTML;
    }

    const imageUploadResults = await handleUploadFile(values.file[0]);
    const { fileName } = imageUploadResults.data;
    const body: any = { title: values?.title, image: fileName, content: html };
    await httpClient.post("post", body);
    methods.reset();
    refetch();
  };

  return (
    <FormProvider {...methods}>
      <PostFormView handleFormSubmit={handleFormSubmit} ref={editorRef} />
    </FormProvider>
  );
};

export default PostFormComponent;
