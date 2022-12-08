import React from "react";

function Perusahaan() {
  return (
    <div className='container my-5 py-5'>
      <h1 className="display-6 fw-bolder text-center">Perusahaan</h1>
      <hr />
      <div className="row">
        <div className="col-sm-6">
          <div className="card h-100 text-center p-4 me-5">
            <div className="card-body">
              <h5 className="card-title">PT Mandiri Cipta Labelindo</h5>
              <p className="card-text h-50">
              PT. Mandiri Cipta Labelindo berorientasi pada kebutuhan stiker, label supermarket, dan label numbering untuk industri garmen di Indonesia. Komitmen kami pada penerapan strategi yang tepat dalam segi kualitas, kinerja cepat 24 jam, 
              melalui pemantauan yang dapat diandalkan dan kontrol adalah prinsip utama dalam filosofi kami.
              </p>
              <a href="#" className="btn btn-outline-secondary mt-5">
                Kunjungi Perusahaan
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card h-100 text-center p-4 me-5">
            <div className="card-body ">
              <h5 className="card-title">PT SINERGI JAGAT KONSTRUKSI</h5>
              <p className="card-text h-50">
              PT Sinergi Jagat Konstruksi bergerak dibidang perdagangan dan jasa konstruksi.
              </p>
              <a href="#" className="btn btn-outline-secondary mt-5">
                Kunjungi Perusahaan
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="card h-100 text-center p-4 me-5 ml-5">
            <div className="card-body">
              <h5 className="card-title">PT GUDANG LEBAH INDONESIA</h5>
              <p className="card-text h-50">
              PT Gudang Lebah Indonesia, bergerak dibidang produksi dan perdagangan produk yang dihasilkan oleh lebah (Madu, Royal Jelly, Beepollen,Propolis, lilin lebah dan produk turunanan lainnya) dan gula semut / coconut organik sugar. 
              Kami membuka kerjasama kepada sema pihak yang memerlukan supply produk-produk tersebut.
              </p>
              <a href="#" className="btn btn-outline-secondary mt-5">
                Kunjungi Perusahaan
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card h-100 text-center p-4 me-5">
            <div className="card-body">
              <h5 className="card-title">CV. SINERGI INDONESIA MUDA</h5>
              <p className="card-text h-50">
              Kami adalah perusahaang yang bergerak di bidang stainless steel. Baik itu penjualan material dalam bentuk lembaran ataupun coil. 
              Kami juga mengerjakan berbagai macam custom request parts yang berbahan dasar stainless steel.
              </p>
              <a href="#" className="btn btn-outline-secondary mt-5">
                Kunjungi Perusahaan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perusahaan;
