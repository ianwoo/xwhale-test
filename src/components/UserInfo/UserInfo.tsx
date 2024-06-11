'use client';
import { Avatar, Input, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AppLink } from '../common';
import { useState } from 'react';
import './test.scss';

type Car = {
  id: number;
  make: 'Mitsubishi' | 'Honda' | 'Audi' | 'BMW';
  model: 'Lancer' | 'Vezel' | 'Civic' | 'A3' | 'A4' | 'A7' | 'i8' | 'i10';
  type: 'New' | 'Used';
  price?: number;
};

type Price = {
  car_id: number;
  price: number | undefined;
};

const carList: Car[] = [
  { id: 1, make: 'Mitsubishi', model: 'Lancer', type: 'Used' },
  { id: 2, make: 'Honda', model: 'Vezel', type: 'New' },
  { id: 3, make: 'Honda', model: 'Civic', type: 'Used' },
  { id: 4, make: 'Audi', model: 'A3', type: 'New' },
  { id: 5, make: 'Audi', model: 'A4', type: 'Used' },
  { id: 6, make: 'Audi', model: 'A7', type: 'New' },
  { id: 7, make: 'BMW', model: 'i8', type: 'Used' },
  { id: 8, make: 'BMW', model: 'i10', type: 'Used' },
];

const priceList: Price[] = [
  { car_id: 8, price: 10000 },
  { car_id: 2, price: 4000 },
  { car_id: 3, price: 3000 },
  { car_id: 1, price: 2000 },
  { car_id: 4, price: 1000 },
  { car_id: 6, price: 5000 },
  { car_id: 5, price: 6000 },
  { car_id: 7, price: 7000 },
];

const colList = [
  { field: 'id', headerName: 'ID', width: 180 },
  { field: 'make', headerName: 'Make', width: 180 },
  { field: 'model', headerName: 'Model', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
  { field: 'price', headerName: 'Price', width: 180 },
];

interface UserInfoProps {
  className?: string;
  showAvatar?: boolean;
  user?: any;
}

/**
 * Renders User info with Avatar
 * @component UserInfo
 * @param {boolean} [showAvatar] - user's avatar picture is shown when true
 * @param {object} [user] - logged user data {name, email, avatar...}
 */
const UserInfo = ({ showAvatar = false, user, ...restOfProps }: UserInfoProps) => {
  const [search, setSearch] = useState<string>('');

  const searchString = () => {
    const stringArray: string[] = search.split(' ');
    return carList.filter((c) => {
      let isSearched = false;
      stringArray.forEach((s) => {
        if (c.make.toLowerCase().includes(s.toLowerCase()) || c.model.toLowerCase().includes(s.toLowerCase())) {
          isSearched = true;
        }
      });
      return isSearched;
    });
  };

  const appendPrices = (cars: Car[]) => {
    cars.forEach((c) => {
      c.price = priceList.filter((p) => p.car_id === c.id)[0].price;
    });
    return cars;
  };

  return (
    <Stack alignItems="center" minHeight="fit-content" marginBottom={2} {...restOfProps}>
      <TextField onChange={(e) => setSearch(e.target.value)} />
      <DataGrid rows={appendPrices(searchString())} columns={colList} />
      <div className="crazy-grid">
        <div className="flex-row">
          <div className="box hash1b2634 disappear"></div>
          <div className="box hash202a38"></div>
          <div className="box hash202a38"></div>
          <div className="box hash26313d"></div>
          <div className="box hash26313d"></div>
          <div className="box hash202a38"></div>
          <div className="box hash202a38"></div>
          <div className="box hash1b2634 disappear"></div>
        </div>
        <div className="flex-row">
          <div className="box hash1b2634 disappear"></div>
          <div className="box hash202a38 width3">
            <div>Transparent and direct pricing with no intermediary ensures our clients receive best execution.</div>
          </div>
          <div className="box green width2 title">
            <div>RFQ</div>
          </div>
          <div className="box hash202a38"></div>
          <div className="box hash202a38 disappear"></div>
        </div>
        <div className="flex-row">
          <div className="box hash1b2634 disappear"></div>
          <div className="box hash26313d"></div>
          <div className="box hash202a38 width3">
            <div>
              Will facilitate fiat currency and virtual asset trading pairs with direct USD and HKD virtual asset
              products.
            </div>
          </div>
          <div className="box green width2 title">
            <div>Trade Crypto For Fiat</div>
          </div>
          <div className="box hash1b2634 disappear"></div>
        </div>
        <div className="flex-row">
          <div className="box hash202a38 disappear"></div>
          <div className="box hash26313d"></div>
          <div className="box black width3 title">
            <div>Our Features</div>
          </div>
          <div className="box hash26313d"></div>
          <div className="box hash26313d"></div>
          <div className="box hash1b2634 disappear"></div>
        </div>
        <div className="flex-row">
          <div className="box hash1b2634 disappear"></div>
          <div className="box green width2 title">
            <div>Sub-account Support</div>
          </div>
          <div className="box hash202a38 width3">
            <div>
              Providing flexibility, control in monitoring different portfolios, and optimal portfolio management.
            </div>
          </div>
          <div className="box hash202a38"></div>
          <div className="box hash1b2634 disappear"></div>
        </div>
        <div className="flex-row">
          <div className="box hash1b2634 disappear"></div>
          <div className="box hash202a38"></div>
          <div className="box green width2 title">
            <div>Custody</div>
          </div>
          <div className="box hash202a38 width3">
            <div>
              Custody of client assets are protected by offline, air-gapped storage systems with insurance protection.
            </div>
          </div>
          <div className="box hash1b2634 disappear"></div>
        </div>
        <div className="flex-row">
          <div className="box hash1b2634 disappear"></div>
          <div className="box hash202a38"></div>
          <div className="box hash202a38"></div>
          <div className="box hash26313d"></div>
          <div className="box hash26313d"></div>
          <div className="box hash202a38"></div>
          <div className="box hash202a38"></div>
          <div className="box hash1b2634 disappear"></div>
        </div>
        <div className="flex-row">
          <div className="box hash1b2634 disappear"></div>
          <div className="box hash202a38"></div>
          <div className="box hash202a38"></div>
          <div className="box hash26313d"></div>
          <div className="box hash26313d"></div>
          <div className="box hash202a38"></div>
          <div className="box hash202a38"></div>
          <div className="box hash1b2634 disappear"></div>
        </div>
      </div>
    </Stack>
  );
};

export default UserInfo;
