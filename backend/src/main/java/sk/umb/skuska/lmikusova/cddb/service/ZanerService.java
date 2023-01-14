package sk.umb.skuska.lmikusova.cddb.service;

import org.springframework.stereotype.Service;
import sk.umb.skuska.lmikusova.cddb.domain.Zaner;
import sk.umb.skuska.lmikusova.cddb.domain.ZanerRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ZanerService {

    public ZanerService(ZanerRepository zanerRepository) {
        this.zanerRepository = zanerRepository;
    }

    private ZanerRepository zanerRepository;

    public void addZaner(Zaner zaner) {
        zanerRepository.save(zaner);
    }

    public List<Zaner> getAllZanre() {
        return zanerRepository.findAll();
    }
}
