export default function Error({errorMessage}:{errorMessage:string}) {
    return (
      <div className="bg-black text-red-200 text center p-5 m-5 border border-red-200 text-center">
          <p>
             {errorMessage}
          </p>
      </div>
    )
  }
  