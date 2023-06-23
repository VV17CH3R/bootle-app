"use client"

import { ImgElement } from "@/models/img-element";
import { FormEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Spinner } from "@/components/bootstrap";
import Image from "next/image";

export default function SearchPage() {

  const [searchResults, setSetSearchResults] = useState<ImgElement[] | null>(null)

  const [searchResultsLoading, setSearchResultLoading] = useState(false);
  const [searchResultsLoadingError, setSearchResultLoadingError] = useState(false);


  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();

    if (query) {

      try {
        setSetSearchResults(null);
        setSearchResultLoadingError(false);
        setSearchResultLoading(true);

        const response = await fetch("/api/search?query=" + query);
        const images: ImgElement[] = await response.json();
        setSetSearchResults(images);
      } catch (error) {
        console.error(error);
        setSearchResultLoadingError(true);
      } finally {
        setSearchResultLoading(false);
      }

    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="my-3" controlId="search-input">
          <Form.Label>Поисковый запрос:</Form.Label>
          <Form.Control
            name="query"
            placeholder="Например котики, хотдоги, машины..."
          />
        </Form.Group>
        <Button disabled={searchResultsLoading} className=" p-2 px-10 m-3 bg-blue-900" type="submit">Искать</Button>
      </Form>
      <div className="flex flex-col items-center">
        {
          searchResultsLoading && <Spinner animation="border" />
        }
        {
          searchResultsLoadingError && <p>Что-то пошло не так. Попробуйте снова.</p>
        }
        {
          searchResults?.length === 0 && <p>Ничего не найдено. Попробуйте другой запрос.</p>
        }
      </div>
      {
        searchResults &&
        <div className="flex flex-col items-center justify-center">
          {
            searchResults.map(el => {
              return (
                <Image
                  key={el.urls.raw}
                  src={el.urls.raw}
                  width={250}
                  height={250}
                  alt={el.description}
                  className="rounded m-2 shadow h-full min-w-full"
                />
              )
            })
          }
        </div>
      }
    </div>
  )
}