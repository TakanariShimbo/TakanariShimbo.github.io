import GenericDialog from "./GenericDialog";

interface ContentsProps {
  images: string[];
}

const Contents = ({ images }: ContentsProps) => {
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-2 gap-4 laptop:grid-cols-3">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            className="aspect-[4/5] w-full rounded-md"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

interface PhotoDialogProps {
  open: boolean;
  onClose: () => void;
  images: string[];
}

const PhotoDialog = ({ open, onClose, images }: PhotoDialogProps) => {
  return (
    <GenericDialog open={open} onClose={onClose} maxWidth="max-w-5xl">
      <Contents images={images} />
    </GenericDialog>
  );
};

export default PhotoDialog;
