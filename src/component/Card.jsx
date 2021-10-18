export const Card = ({
  topBadge,
  title,
  description,
  announcement,
  image,
}) => {
  return (
    <div
      className="card bg-dark text-white rounded-3 shadow-lg border-0 m-2 card-style"
        style={{backgroundImage: `linear-gradient(0deg, #000, #0000), url(${image})`}}
    >
      <div className="card-img-overlay d-flex flex-column justify-content-between">
        <div>
          <span className="badge rounded-pill bg-dark text-light p-2 px-3 bg-opacity-75">
            {topBadge}
          </span>
        </div>
        <div>
          <h4>{title}</h4>
          {description && (
            <small>
              {description}
              <br />
            </small>
          )}
          <span className="mt-2 badge rounded-pill bg-dark text-light p-2 px-3 bg-opacity-75 border-white border border-1">
            <li>{announcement}</li>
          </span>
        </div>
      </div>
    </div>
  );
};