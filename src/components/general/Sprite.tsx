import styles from './sprite.module.scss'

/* example sprite variables:
  --width: 135px;
  --height: 96px;
  --frames: 8;
  --speed: 1s;
  --url: url('/assets/pixels/monsters/forestmonster/Bush_Monster-Idle.png');
*/

export default function Sprite({
  width,
  height,
  frames,
  speed,
  url
}: {
  width: string;
  height: string;
  frames: string;
  speed:  string;
  url: string;
}) {
  return (
    <div
      className={styles.sprite}
      style={{
        '--width': width,
        '--height': height,
        '--frames': frames,
        '--speed': speed,
        '--url': url
      } as React.CSSProperties}
    ></div>
  );
}
