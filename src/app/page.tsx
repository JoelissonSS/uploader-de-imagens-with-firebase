'use client';
import Image from 'next/image';
import { duck } from './constants/constants';
import {
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { storage } from './firebase/init';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export default function Home() {
  const [imgURL, setImgURL] = useState('');
  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fileInput = e.currentTarget[0] as unknown as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (!file) return;
    const storageRef = ref(storage, `image/${file.name}`);

    const uploadImage = uploadBytesResumable(storageRef, file);
    uploadImage.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert(error.message);
      },
      () => {
        alert('upload da imagem deu certo');

        getDownloadURL(uploadImage.snapshot.ref).then((url) =>
         setImgURL(url),
        );
      },
    );
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <form onSubmit={handleUpload}>
        <input type="file" />
        <button type="submit">enviar</button>
      </form>
      <br />
      {imgURL && <Image src={imgURL} alt='imagem q cabo de chegar' width={80} height={80}/>}
      {imgURL && <p>{imgURL}</p>}
    </main>
  );
}
