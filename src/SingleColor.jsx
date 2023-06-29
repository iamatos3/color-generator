import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  const { hex, weight, rgb } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied successfully!');
      } catch (error) {
        toast.error('Color failed to copy. Please try again.')
      }
    } else {
      toast.error('Clipboard access not available.')
    }
  };

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color' }
      style={{background:`#${hex}`}}
      onClick={saveToClipboard}
    >
      <p className="percent-value">TINT: {weight}%</p>
      <p className="color-value">HEX: #{hex}</p>
      <p className="color-value">RGB: {rgb.join(", ")}</p>
    </article>
  );
};

export default SingleColor;
