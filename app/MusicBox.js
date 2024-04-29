import styles from "./styles.css"

export default function MusicBox(props){
    return (
        <div className="music-grid">
            <div className="image-box">
                <img src={props.source} alt="cover" className="music-image"/>
            </div>
            <div className="music-info-box">
                <h1 className="song-name">{props.name}</h1>
                <p className="music-supp-text"></p>
                <h1 className="album">{props.album}</h1>
                <p className="music-supp-text">by</p>
                <h1 className="artist-name">T</h1>
                <p className="lyric">'temporary'</p>
            </div>
        </div>
    )
}