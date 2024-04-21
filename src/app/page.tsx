import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/b1215519-4152-41a6-b65f-41f485ccf051-i906yh.png",
  "https://utfs.io/f/314978aa-7011-486d-9fab-bab54f31b1fb-i906wt.png",
  "https://utfs.io/f/39a6e40d-7f2b-4f26-8cd7-1dc92b6f561b-i906aa.png",
  "https://utfs.io/f/d5993950-a606-4306-833c-24e9a741cfa2-i9069b.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ),
        )}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
