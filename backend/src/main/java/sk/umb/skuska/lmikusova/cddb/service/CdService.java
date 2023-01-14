package sk.umb.skuska.lmikusova.cddb.service;

import org.springframework.stereotype.Service;
import sk.umb.skuska.lmikusova.cddb.domain.*;

@Service
public class CdService {
    public CdService(CdRepository cdRepository, ZanerRepository zanerRepository) {
        this.cdRepository = cdRepository;
        this.zanerRepository = zanerRepository;
    }

    private CdRepository cdRepository;

    private ZanerRepository zanerRepository;

    public Cd addCd(CdDto dto) {
        Cd cd = new Cd();

        Zaner zaner = zanerRepository.findByNazov(dto.getZaner());

        if (zaner == null) {
            Zaner zaner1 = new Zaner();
            zaner1.setNazov(dto.getNazov());
            zanerRepository.save(zaner1);
        }

        cd.setZaner(zaner);
        cd.setId(dto.getId());
        cd.setAutor(dto.getAutor());
        cd.setNazov(dto.getNazov());

        return cdRepository.save(cd);
    }
}
