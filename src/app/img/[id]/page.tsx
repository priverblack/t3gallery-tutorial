import FullPageImageView from "~/components/full-image-page";

export default function ImagePage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imageId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id");

  return <FullPageImageView id={idAsNumber} />;
}
