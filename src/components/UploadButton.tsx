import { uploadToS3 } from "@/actions/uploadActions";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";

export default function UploadButton({
  onUploadComplete,
}: {
  onUploadComplete: (url: string) => void;
}) {
  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const target = ev.target as HTMLInputElement;

    if (target.files?.length) {
      const file = target.files[0];
      const formData = new FormData();
      formData.set("file", file);
      const result = await uploadToS3(formData);
      onUploadComplete(result.url as string);
      console.log({ result });
    }
  }

  return (
    <>
      <label htmlFor="inputFile">
        <FontAwesomeIcon icon={faUpload} />
      </label>
      <input
        id="inputFile"
        className="hidden"
        type="file"
        onChange={(ev) => upload(ev)}
      />
    </>
  );
}
