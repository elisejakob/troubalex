import styles from './icon.module.scss'

export default function Icon({ type }: { type: string }) {
  return (
    <span className={styles.icon}>
      {type === 'title' && 
        <img src="/assets/pixels/icons/basket.png" />
      }
      {type === 'archive' && 
        <img src="/assets/pixels/icons/expression_chat.png" />
      }
      {type === 'about' && 
        <img src="/assets/pixels/icons/expression_love.png" />
      }
      {type === 'contact' && 
        <img src="/assets/pixels/icons/arrow_right.png" />
      }
    </span>
  );
}
