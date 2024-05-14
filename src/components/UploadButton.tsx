import { uploadToS3 } from "@/actions/uploadActions";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";

export default function UploadButton({
  onUploadComplete,
}: {
  onUploadComplete: (url: string) => void;
}) {
  const primaryColor = "#febe98";
  const secondaryColor = "#522a28";

  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const target = ev.target as HTMLInputElement;

    if (target.files?.length) {
      const file = target.files[0];
      const formData = new FormData();
      formData.set("file", file);
      const result = await uploadToS3(formData);
      onUploadComplete(result.url as string);
      console.log({ result, file, formData });
    }
  }

  return (
    <>
      <label
        htmlFor="inputFile"
        className={`items-center gap-2 inline-flex rounded-md h-8 hover:shadow-lg transition-all`}
      >
        <FontAwesomeIcon
          icon={faUpload}
          className={`p-2 text-sm rounded-md bg-[${primaryColor}] text-[${secondaryColor}]`}
        />
        <input
          id="inputFile"
          className="hidden"
          type="file"
          onChange={(ev) => upload(ev)}
        />
      </label>
    </>
  );
}
